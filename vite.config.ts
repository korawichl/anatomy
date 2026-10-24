import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { recordAttempt } = require('./scripts/record_to_git.cjs');

function gitRecordPlugin(): Plugin {
  return {
    name: 'git-record-endpoint',
    configureServer(server) {
      server.middlewares.use('/api/record-to-git', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method Not Allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk: Buffer) => {
          body += chunk.toString();
        });

        req.on('end', () => {
          try {
            const attemptData = JSON.parse(body);
            const result = recordAttempt(attemptData, true);
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.statusCode = 200;
            res.end(JSON.stringify(result));
          } catch (err: any) {
            console.error('Error recording to git:', err);
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, error: err.message || 'Internal Server Error' }));
          }
        });
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), gitRecordPlugin()],
  server: {
    port: 3000,
    open: false
  }
});
