import express from 'express';
import bodyParser from 'body-parser';
// import { serverPort } from '../etc/config.json';

import * as db from './utils/DBUtils.js';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.get('/videos',(req,res)=>{
    db.listVideos().then(data=>res.send(data));
});

app.post('/videos',(req,res)=>{
    db.createVideo(req.body).then(data => res.send(data));
});

app.delete('/videos/:id',(req,res)=>{
    db.deleteVideo(req.param.id).then(data=>res.send(data));
});

const server = app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
});
