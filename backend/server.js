import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const DATA_PATH = process.env.DATA_PATH || path.join(__dirname, '..', 'data', 'intern_dev_tasks_sources_v3.json');

// API: return tasks JSON
app.get('/api/tasks', (req, res) => {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf-8');
    const json = JSON.parse(raw);
    res.json(json);
  } catch (err) {
    console.error('Failed to read data:', err);
    res.status(500).json({ error: 'Failed to read data', details: err.message });
  }
});

// Serve frontend build if available
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));
  app.get('*', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`intern.dev backend running on http://localhost:${PORT}`);
  console.log(`Data path: ${DATA_PATH}`);
});
