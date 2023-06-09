const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
 content: {
  type: String,
  require: true,
 },
 userEmail : {
  type: String
 },
 comments: [
  {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
  }
 ]
},{timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;