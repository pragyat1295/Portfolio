// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Log environment variables for debugging (remove in production)
    console.log('SMTP Config:', {
      host: process.env.SMTP_SERVER_HOST,
      port: process.env.SMTP_SERVER_PORT,
      user: process.env.SMTP_SERVER_USERNAME ? 'Set' : 'Not set',
      pass: process.env.SMTP_SERVER_PASSWORD ? 'Set' : 'Not set'
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER_HOST,
      port: parseInt(process.env.SMTP_SERVER_PORT),
      secure: false, // true for 465, false for other ports like 587
      auth: {
        user: process.env.SMTP_SERVER_USERNAME,
        pass: process.env.SMTP_SERVER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: process.env.SMTP_SERVER_USERNAME,
      to: process.env.SITE_MAIL_RECEIVER,
      subject: subject || `Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email.' }, { status: 500 });
  }
}
