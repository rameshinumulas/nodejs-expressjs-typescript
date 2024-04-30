// JAVASCRIPT INITILIZATION
// const express = require('express');
// const dontenv = require('dotenv');

// TYPESCRIPT INITIALIZATION
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

// const app = express();
// const port = process.env.PORT;

const app: Express = express();
const port = process.env.PORT

// app.get('/', (req, res) => {
//     res.send('this is initialized server with route')
// })

app.get('/', (req: Request, res: Response) => {
    res.send('first route with typescript')
})

app.listen(port, () => {
    console.log('server added')
})