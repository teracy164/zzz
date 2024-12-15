import http from 'http';
import fs from 'fs/promises'; // fs/promises を使用して非同期ファイル操作を簡潔に
import path from 'path';
import { fileURLToPath } from 'url';

// 現在のディレクトリを取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// サーバーを作成
const server = http.createServer(async (req, res) => {
  try {
    const basePath = path.join(__dirname, '/.output/public/');
    // リクエストされたパスを取得
    const requestedPath = path.join(basePath, req.url);

    // ファイルが存在するかチェック
    const stats = await fs.stat(requestedPath).catch(() => null);

    if (stats && stats.isFile()) {
      // ファイルが存在する場合、そのファイルを返す
      const ext = path.extname(requestedPath).toLowerCase();
      const contentType = getContentType(ext);

      const fileData = await fs.readFile(requestedPath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(fileData);
    } else {
      const indexFile = path.join(basePath, '/index.html');
      // ファイルが存在しない場合、index.html を返す
      const indexData = await fs.readFile(indexFile, 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexData);
    }
  } catch (err) {
    // エラー処理
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

// ポート3000でサーバーを起動
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// 拡張子に基づいたContent-Typeを返す関数
function getContentType(ext) {
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.txt': 'text/plain',
  };
  return mimeTypes[ext] || 'application/octet-stream';
}
