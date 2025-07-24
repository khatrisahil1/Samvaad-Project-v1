import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, phone, reason, message } = req.body;

  if (!email || !name || !reason) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  console.log("Received:", { name, email, phone, reason, message });

  try {
    // ✅ Thank You Email to User
    console.log("Sending user email...");
    const userResponse = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: email,
      subject: "Thanks for contacting SAMVAAD!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #3B82F6;">Hi ${name},</h2>
          <p>Thank you for reaching out to <strong>SAMVAAD</strong>! 🎉</p>
          <p>We’ve received your message with the following details:</p>
          <ul style="line-height: 1.6;">
            <li><strong>Reason:</strong> ${reason}</li>
            <li><strong>Message:</strong> ${message || "N/A"}</li>
          </ul>
          <p>Our team will get back to you as soon as possible.</p>

          <hr style="margin: 20px 0;" />

          <p>🔗 <strong>Stay connected with us:</strong></p>
          <p style="font-size: 15px; line-height: 2;">
            <a href="../socialLogos/linkedin.png" target="_blank">
              <img src="https://samvaadconnect.com/icons/linkedin.png" alt="LinkedIn" style="width: 20px; vertical-align: middle; margin-right: 8px;" />
              samvaadfromideastoimpact
            </a><br/>

            <a href="https://www.instagram.com/samvaadfromideastoimpact/" target="_blank">
              <img src="../socialLogos/instagram.png" alt="Instagram" style="width: 20px; vertical-align: middle; margin-right: 8px;" />
              samvaadfromideastoimpact
            </a><br/>

            <a href="https://youtube.com/@samvaad-fromideastoimpact?si=GoaV__RHR20Mi6oV" target="_blank">
              <img src="../socialLogos/youtube.png" alt="YouTube" style="width: 20px; vertical-align: middle; margin-right: 8px;" />
              samvaad-fromideastoimpact
            </a><br/>

            <a href="https://www.facebook.com/profile.php?id=61576717783045" target="_blank">
              <img src="../socialLogos/facebook.png" alt="Facebook" style="width: 20px; vertical-align: middle; margin-right: 8px;" />
              samvaad
            </a>
          </p>

          <p style="color: #888; font-size: 12px;">© SAMVAAD – From Ideas to Impact</p>
        </div>
      `,
    });
    console.log("User email response:", userResponse);

    // ✅ Team Email
    console.log("Sending team email...");
    const teamResponse = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.TEAM_EMAIL!,
      subject: `New Contact: ${name} (${reason})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ccc; padding: 20px;">
          <h2 style="color: #EF4444;">🚨 New Contact Form Submission</h2>
          <p>Details:</p>
          <ul style="line-height: 1.8;">
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone || "N/A"}</li>
            <li><strong>Reason:</strong> ${reason}</li>
            <li><strong>Message:</strong> ${message || "N/A"}</li>
          </ul>

          <hr style="margin: 20px 0;" />

          <p style="font-size: 14px;">
            🔗 Socials: LinkedIn, Instagram, YouTube, Facebook<br/>
            ✉️ Email: samvaadews@gmail.com
          </p>

          <p style="color: #888; font-size: 12px;">© SAMVAAD Internal Notification</p>
        </div>
      `,
    });
    console.log("Team email response:", teamResponse);

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
