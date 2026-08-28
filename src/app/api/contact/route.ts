import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/schemas'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the incoming data against your existing Zod schema
    const result = contactSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    }

    const { name, email, message } = result.data

    // Send the email
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'oneheartadis@gmail.com',
      subject: `New message from ${name} on Chi Akomas Website`,
      replyTo: email,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
