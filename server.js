//  https://nextjs.org/docs/advanced-features/custom-server
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const conf = require('./next.config');
const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME ?? 'localhost';
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port, conf });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
