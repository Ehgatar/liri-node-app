console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: 'M6rWOv0PMtYj1oQdHTpFO57kv',
  consumer_secret: 'ykToisTzAZqiPnnxd4OzX8VYNbRJXCvuTeiBLghRPIz5Qw9rHO',
  access_token_key: '963983205312401408-kvR1mNsjyEi2VkT5Jd1hQSL9QOH0hji',
  access_token_secret: 'eSQZGrd2Z2GR1EEPysjX3n4B8DU3Je8h5NZc8biCxlC1b',
};

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};