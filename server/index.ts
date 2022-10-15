import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.listen(5050, () => {
    console.log("Server Running");
})