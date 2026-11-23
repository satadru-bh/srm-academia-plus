export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  }

  const url = new URL(req.url);
  // Forward path to CampusWeb API
  // url.pathname starts with /api/...
  const targetUrl = `https://api.campusweb.in${url.pathname}${url.search}`;

  // Clone headers and inject required CampusWeb origin/client headers
  const forwardHeaders = new Headers();
  req.headers.forEach((value, key) => {
    // Skip host and origin to avoid conflicts
    if (!['host', 'origin', 'referer'].includes(key.toLowerCase())) {
      forwardHeaders.set(key, value);
    }
  });

  forwardHeaders.set('Origin', 'https://campusweb.in');
  forwardHeaders.set('Referer', 'https://campusweb.in/');
  forwardHeaders.set('X-Client', 'web');
  forwardHeaders.set('X-Device-Platform', 'Windows');
  forwardHeaders.set('X-Device-Name', 'Chrome');
  forwardHeaders.set('X-Device-Model', 'Chrome 130.0.0.0');
  forwardHeaders.set('X-App-Version', '2026.10.08-sessions.3');
  forwardHeaders.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36');

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: forwardHeaders,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined,
    });

    const resHeaders = new Headers(response.headers);
    resHeaders.set('Access-Control-Allow-Origin', '*');
    resHeaders.set('Access-Control-Allow-Credentials', 'true');
    // Remove content-encoding if transferred
    resHeaders.delete('content-encoding');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: resHeaders,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(
      JSON.stringify({ code: 'PROXY_ERROR', message: `Proxy gateway error: ${message}`, status: 'error' }),
      {
        status: 502,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
