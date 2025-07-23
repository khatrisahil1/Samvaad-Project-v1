import axios from 'axios';

export const sendEmail = async (to: string, name: string) => {
  const htmlContent = `
    <div>
      <h2>Hello ${name},</h2>
      <p>Thank you for reaching out to us at Samvaad. We'll get back to you soon!</p>
      <p>Warm regards,<br/>Team Samvaad</p>
    </div>
  `;

  try {
    const response = await axios.post(
      'https://api.resend.com/emails',
      {
        from: process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL || 'Samvaad <noreply@samvaadconnect.com>',
        to,
        subject: 'Thank you for contacting Samvaad!',
        html: htmlContent,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error('Resend API error:', error.response?.data || error.message);
    throw new Error('Failed to send thank-you email');
  }
};