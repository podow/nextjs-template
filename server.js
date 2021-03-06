const next = require('next');
const path = require('path');
const express = require('express');
const cacheableResponse = require('cacheable-response');
const bodyParser = require('body-parser');

require('dotenv').config({ path: path.resolve(`${__dirname}/.env`) });

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams),
  }),
  send: ({ data, res }) => res.send(data),
});

/**
 * Конфиг сервера
 */
app.prepare().then(() => {
  const server = express();

  server.use(
    '/public',
    express.static(__dirname + '/public', {
      maxAge: '365d',
    })
  );
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.get('/', (req, res) => {
    const pagePath = '/';
    return !dev ? ssrCache({ req, res, pagePath }) : app.render(req, res, '/');
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (error) => {
    if (error) throw error;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
