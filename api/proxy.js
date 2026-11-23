// Vercel Serverless Function Proxy for SRM Academia / CampusWeb Gateway
// Solves CORS and Cloudflare blocks by injecting required headers and forwarding requests.

module.exports = async (req, res) => {
  // 1. Universal CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,Content-Type,Accept,Authorization,X-CSRF-Token,X-Net-ID,X-Session-Token,X-Client,X-Device-Name,X-Device-Platform,X-Device-Model,X-App-Version,Cookie');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  try {
    // 2. Extract path (e.g. /api/auth/login -> auth/login)
    let subpath = req.query && req.query.path;
    if (!subpath) {
      const match = (req.url || '').match(/^\/api\/(.*?)(\?|$)/);
      subpath = match ? match[1] : '';
    }

    const targetUrl = `https://api.campusweb.in/api/${subpath}`;

    // 3. Inject authentic CampusWeb browser client headers
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

    // Forward active student session credentials if provided
    if (req.headers['x-session-token']) forwardHeaders['X-Session-Token'] = req.headers['x-session-token'];
    if (req.headers['x-csrf-token']) forwardHeaders['X-CSRF-Token'] = req.headers['x-csrf-token'];
    if (req.headers['x-net-id']) forwardHeaders['X-Net-ID'] = req.headers['x-net-id'];
    if (req.headers['cookie']) forwardHeaders['Cookie'] = req.headers['cookie'];

    const fetchOptions = {
      method: req.method,
      headers: forwardHeaders
    };

    if (req.method !== 'GET' && req.method !== 'HEAD' && req.body) {
      fetchOptions.body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    }

    const response = await fetch(targetUrl, fetchOptions);
    const data = await response.text();

    res.status(response.status);
    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/json');
    return res.send(data);
  } catch (err) {
    return res.status(502).json({
      code: 'PROXY_GATEWAY_ERROR',
      message: err.message || 'Error connecting to SRM Academia gateway',
      status: 'error'
    });
  }
};
