import { useState, useCallback } from 'react';
import { API_ROUTES } from '../config/api';

async function fetchClientIp() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const response = await fetch('https://api.ipify.org?format=json', { signal: controller.signal });
    clearTimeout(timeout);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data.ip;
  } catch {
    return null;
  }
}

export function useSubmission() {
  const [status, setStatus] = useState({ state: 'idle', message: '', location: null });

  const submit = useCallback(async (payload) => {
    setStatus({ state: 'loading', message: '', location: null });

    try {
      const ip = await fetchClientIp();
      const response = await fetch(API_ROUTES.submissions, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...payload, ip }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(errorBody.message || 'Submission failed');
      }

      const data = await response.json();
      setStatus({ state: 'success', message: data.message, location: data.location || null });
      return data;
    } catch (error) {
      setStatus({
        state: 'error',
        message: error.message || 'Submission failed',
        location: null,
      });
      throw error;
    }
  }, []);

  const resetStatus = useCallback(() => {
    setStatus({ state: 'idle', message: '', location: null });
  }, []);

  return { submit, status, resetStatus };
}

