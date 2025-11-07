import axios from 'axios';

export async function lookupLocation(ip) {
  if (!ip) {
    return null;
  }

  const token = process.env.IPINFO_TOKEN?.trim();

  try {
    if (token) {
      const { data } = await axios.get(`https://ipinfo.io/${ip}?token=${token}`);
      return {
        city: data.city,
        region: data.region,
        country: data.country,
        postal: data.postal,
        loc: data.loc,
        org: data.org,
        source: 'ipinfo',
      };
    }

    const { data } = await axios.get(`https://ipapi.co/${ip}/json/`);
    if (data.error) {
      return null;
    }
    return {
      city: data.city,
      region: data.region,
      country: data.country_name || data.country,
      postal: data.postal,
      loc: `${data.latitude},${data.longitude}`,
      org: data.org,
      source: 'ipapi',
    };
  } catch (error) {
    console.warn('Location lookup failed:', error.message);
    return null;
  }
}

