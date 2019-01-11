const rp = require('request-promise');
const $ = require('cheerio');
const potusParse = require('./potusParse');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
let wikiUrls = [];

rp(url).then(function(html) {
  Array.from($('big > a', html)).forEach(function(line) {
    wikiUrls.push(line.attribs.href);
  });
  return Promise.all(
    wikiUrls.map(function(url) {
      return potusParse(`https://en.wikipedia.org${url}`);
    })
  )
  console.log(wikiUrls);
}).catch(function() {
  console.log('error');
});
