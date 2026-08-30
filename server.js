import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static assets and files from root
app.use(express.static(__dirname));

// Clean URL routing fallback (e.g. /about -> /about.html)
app.get('*', (req, res) => {
  const reqPath = req.path === '/' ? '/index.html' : req.path;
  const filePath = path.join(__dirname, reqPath);
  const htmlPath = path.join(__dirname, `${reqPath}.html`);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return res.sendFile(filePath);
  } else if (fs.existsSync(htmlPath)) {
    return res.sendFile(htmlPath);
  } else {
    return res.sendFile(path.join(__dirname, 'index.html'));
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
