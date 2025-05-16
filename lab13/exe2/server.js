import express, { Router } from 'express';
import router from './router.js';
const app = express();
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});
