
'use server';

import { connectDB } from "@/lib/connectDB.js";
import Message from "@/models/messageSchema.js";
import nodemailer from 'nodemailer';

export async function formSubmit(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  await connectDB();
  try {

    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    await newMessage.save();

    const transporter = nodemailer.createTransport({ 
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: "📩 New Message Received on Portfolio",
      text: `You received a new message from ${name} (${email}):\n\nSubject: ${subject}\nMessage:\n${message}`,
    });
    return { success: true, message: "Form submitted!" };

  } catch (error) {
    console.error("Error saving message:", error);
    return { success: false, message: "Something went wrong!" };
  }
}
