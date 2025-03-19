import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Get the form data from the request
    const formData = await request.formData()

    // Extract the data we need
    const email = formData.get("email") as string
    const category = formData.get("category") as string
    const subscribeToTips = formData.get("subscribeToTips") as string
    const videoFile = formData.get("video") as File

    if (!email || !videoFile) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    console.log("Processing upload request:")
    console.log("- Email:", email)
    console.log("- Category:", category)
    console.log("- Video file name:", videoFile.name)
    console.log("- Video file type:", videoFile.type)
    console.log("- Video file size:", videoFile.size, "bytes")

    // Get the webhook URL and add query parameters
    const webhookUrl = new URL("https://financialplanner-ai.app.n8n.cloud/webhook/upload-cfp")
    webhookUrl.searchParams.append("email", email)
    webhookUrl.searchParams.append("category", category)
    webhookUrl.searchParams.append("subscribeToTips", subscribeToTips)

    // Convert the file to an ArrayBuffer
    const arrayBuffer = await videoFile.arrayBuffer()

    // Set up timeout for the request
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 60000) // 60 second timeout

    try {
      // Send the request to n8n with the video as raw binary data
      const response = await fetch(webhookUrl.toString(), {
        method: "POST",
        headers: {
          "Content-Type": videoFile.type, // Set Content-Type to match the video file type
        },
        body: arrayBuffer, // Send the raw binary data
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("Error from n8n:", response.status, response.statusText, errorText)
        return NextResponse.json(
          { error: `Error from n8n: ${response.status} ${response.statusText}` },
          { status: response.status },
        )
      }

      // Return success response
      return NextResponse.json({ success: true })
    } catch (error) {
      clearTimeout(timeoutId)
      console.error("Error sending to n8n:", error)

      if (error instanceof Error && error.name === "AbortError") {
        return NextResponse.json(
          { error: "Request timed out. The video may be too large or the server is busy." },
          { status: 408 },
        )
      }

      throw error // Re-throw to be caught by the outer try/catch
    }
  } catch (error) {
    console.error("Error in upload API route:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unexpected error occurred" },
      { status: 500 },
    )
  }
}

// Increase the body size limit for this route
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "100mb",
    },
  },
}

