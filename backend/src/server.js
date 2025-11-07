import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { sendSubmissionEmail } from './services/mailer.js';
import { lookupLocation } from './services/location.js';
import { sanitizeSubmission } from './utils/validation.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(',') || '*',
  }),
);
app.use(express.json());

app.get('/api/status', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/submissions', async (req, res) => {
  try {
    const ipOverride = req.body?.ip;
    const submission = sanitizeSubmission(req.body);

    const ip =
      ipOverride ||
      req.headers['x-forwarded-for']?.toString().split(',')[0].trim() ||
      req.socket.remoteAddress;

    const location = await lookupLocation(ip);

    await sendSubmissionEmail({
      submission,
      location,
      ip,
    });

    res.status(201).json({
      message: 'Submission received',
      location,
    });
  } catch (error) {
    console.error('Submission error:', error);
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || 'Unable to process submission' });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Submission service running on port ${PORT}`);
});

