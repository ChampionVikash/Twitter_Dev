const express = require('express');
const connect = require('./config/database');
const app = express();
 
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    const TweetRepo = new TweetRepository();
    const tweet = await TweetRepo.getWithComments('648308722982999f259248fc');
    console.log(tweet);
});   