const request = require('request');
const fs = require('fs');

const key = 'e409f81345e178d13931162cb32301b7';
const url = `https://api.darksky.net/forecast/${key}/37.8267,-122.4233`;

request({url: url, json: true}, (err, data) => {
  let res = data.body;
  console.log(res.currently);
  
})
