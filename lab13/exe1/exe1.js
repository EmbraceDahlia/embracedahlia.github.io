import express from 'express';
import url from 'url';
import path from 'path';

const app = express();
app.set('port', process.env.PORT || 3002);
const port = app.get('port');
console.log(port);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/image', (req, res, nex) => {
    res.sendFile(path.join(__dirname, "../img/anImage.jpg"), err => {
        if (err) {
            console.error('Error sending image:', err);
            res.status(500).send('Error sending image.');
        }
    });
});

app.get('/pdf', (req, res, nex) => {
    res.sendFile(path.join(__dirname, "../pdf/aPdf.pdf"), err => {
        if (err) {
            console.error('Error sending image:', err);
            res.status(500).send('Error sending image.');
        }
    });
});

app.get('/about', (req, res, nex) => {
    res.sendFile(path.join(__dirname, "../txt/about.txt"), err => {
        if (err) {
            console.error('Error sending image:', err);
            res.status(500).send('Error sending image.');
        }
    });
});

app.get(['/', '/home'], (req, res, nex) => {
    res.type('text/plain').send("Welcome to my website");
});

app.use((req, res) => {
    res.status(404).type('text/plain').send("Page not found");
});

app.listen(port, () => { console.log("Server started...") });