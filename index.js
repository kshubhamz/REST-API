import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome!!');
});

app.get('/dummy-user-list', (req, res) => {
    res.sendFile(__dirname + '/public/users.json');
});

app.listen(process.env.PORT || 3000);