import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 587),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendSubmissionEmail({ submission, location, ip }) {
  if (!process.env.EMAIL_TO) {
    throw new Error('EMAIL_TO is not configured');
  }

  const { firstName, lastName, email, phone, zipCode, caseType, description, locale } = submission;

  const html = `
    <h2>New Case Evaluation Request</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Zip Code:</strong> ${zipCode}</p>
    <p><strong>Case Type:</strong> ${caseType}</p>
    <p><strong>Description:</strong></p>
    <p>${description.replace(/\n/g, '<br>')}</p>
    <hr />
    <p><strong>Preferred Locale:</strong> ${locale}</p>
    <p><strong>IP Address:</strong> ${ip || 'Unknown'}</p>
    <p><strong>Location Guess:</strong> ${formatLocation(location)}</p>
  `;

  await transporter.sendMail({
    from: `"Morgan & Morgan Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New Submission from ${firstName} ${lastName}`,
    html,
  });
}

function formatLocation(location) {
  if (!location) {
    return 'Not available';
  }

  const parts = [
    location.city,
    location.region,
    location.country,
    location.postal,
  ].filter(Boolean);

  return parts.length > 0 ? parts.join(', ') : 'Not available';
}

