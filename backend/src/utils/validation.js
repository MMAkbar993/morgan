export function sanitizeSubmission(payload) {
  if (!payload || typeof payload !== 'object') {
    const error = new Error('Invalid submission payload');
    error.statusCode = 400;
    throw error;
  }

  const {
    firstName = '',
    lastName = '',
    email = '',
    phone = '',
    zipCode = '',
    caseType = '',
    description = '',
    consent = false,
    locale = 'en',
  } = payload;

  if (!firstName || !lastName || !email || !phone || !zipCode || !caseType || !description) {
    const error = new Error('Missing required fields');
    error.statusCode = 422;
    throw error;
  }

  if (!consent) {
    const error = new Error('Consent is required');
    error.statusCode = 422;
    throw error;
  }

  return {
    firstName: escapeString(firstName),
    lastName: escapeString(lastName),
    email: escapeString(email),
    phone: escapeString(phone),
    zipCode: escapeString(zipCode),
    caseType: escapeString(caseType),
    description: escapeString(description),
    consent: Boolean(consent),
    locale: escapeString(locale),
    timestamp: new Date().toISOString(),
  };
}

function escapeString(value) {
  return String(value).trim();
}

