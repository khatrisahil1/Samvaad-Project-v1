import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    console.log("Sending email via Resend...");
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // You can change this once domain is verified
      to,
      subject,
      html,
    });

    console.log("Resend response:", response);

    return response;
  } catch (error) {
    console.error("SendEmail error", error);
    throw error;
  }
};
