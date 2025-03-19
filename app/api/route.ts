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

    // Log the data we're about to send
    console.log("Sending to n8n webhook:")
    console.log("- Email:", email)
    console.log("- Category:", category)
    console.log("- Subscribe to tips:", subscribeToTips)
    console.log("- Video file name:", videoFile.name)
    console.log("- Video file type:", videoFile.type)
    console.log("- Video file size:", videoFile.size, "bytes")

    // Get the webhook URL
    const webhookUrl = "https://financialplanner-ai.app.n8n.cloud/webhook/upload-cfp"

    // Add query parameters for the other form data
    const url = new URL(webhookUrl)
    url.searchParams.append("email", email)
    url.searchParams.append("category", category)
    url.searchParams.append("subscribeToTips", subscribeToTips)

    // Convert the file to an ArrayBuffer
    const arrayBuffer = await videoFile.arrayBuffer()

    // Send the request to n8n
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": videoFile.type,
      },
      body: arrayBuffer,
    })

    // Check if the request was successful
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

