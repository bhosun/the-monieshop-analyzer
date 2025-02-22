import express from 'express';
import analyzeController from './controller/analyze.controller';

const app = express();

const port = 3000;

app.use("/", analyzeController);

app.listen(port, () => {
    console.log(`Server is now running on https/localhost:${port}`);
});