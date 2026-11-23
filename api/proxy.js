// Vercel Serverless Function Proxy for SRM Academia / CampusWeb Gateway
// Solves CORS and Cloudflare blocks by injecting required headers and forwarding requests.

module.exports = async (req, res) => {
  // 1. Universal CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }

  try {
    // 2. Buffer request body if needed (Node.js IncomingMessage)
    let bodyBuffer = null;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      if (req.body) {
        bodyBuffer = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
      } else {
        const chunks = [];
        for await (const chunk of req) {
          chunks.push(chunk);
        }
        if (chunks.length > 0) {
          bodyBuffer = Buffer.concat(chunks).toString('utf-8');
        }
      }
    }

    // 3. Extract subpath (e.g. /api/auth/login -> auth/login)
    let subpath = '';
    const rawUrl = req.url || '';
    const queryIndex = rawUrl.indexOf('?');
    const queryString = queryIndex !== -1 ? rawUrl.slice(queryIndex + 1) : '';
    const params = new URLSearchParams(queryString);

    if (params.has('path')) {
      subpath = params.get('path') || '';
    } else {
      const pathname = queryIndex !== -1 ? rawUrl.slice(0, queryIndex) : rawUrl;
      const match = pathname.match(/^\/api\/(.*)/);
      subpath = match ? match[1] : '';
    }

    const targetUrl = `https://api.campusweb.in/api/${subpath}`;

    // 4. Inject authentic CampusWeb browser client headers
    const forwardHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/plain, */*',
      'Origin': 'https://campusweb.in',
      'Referer': 'https://campusweb.in/',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
      'X-Client': 'web',
      'X-Device-Platform': 'Windows',
      'X-Device-Name': 'Chrome',
      'X-Device-Model': 'Chrome 130.0.0.0',
      'X-App-Version': '2026.10.08-sessions.3'
    };

    if (req.headers['x-session-token']) forwardHeaders['X-Session-Token'] = req.headers['x-session-token'];
    if (req.headers['x-csrf-token']) forwardHeaders['X-CSRF-Token'] = req.headers['x-csrf-token'];
    if (req.headers['x-net-id']) forwardHeaders['X-Net-ID'] = req.headers['x-net-id'];
    if (req.headers['cookie']) forwardHeaders['Cookie'] = req.headers['cookie'];

    const fetchOptions = {
      method: req.method,
      headers: forwardHeaders
    };

    if (bodyBuffer) {
      fetchOptions.body = bodyBuffer;
    }

    const response = await fetch(targetUrl, fetchOptions);
    const textData = await response.text();

    res.statusCode = response.status;
    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/json');
    return res.end(textData);
  } catch (err) {
    res.statusCode = 502;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({
      code: 'PROXY_GATEWAY_ERROR',
      message: err.message || 'Error connecting to SRM Academia gateway',
      status: 'error'
    }));
  }
};
