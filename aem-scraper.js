const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.author.philips.com/content/B2B_HC/en_US_master/medical-specialties/population-health.html?wcmmode=disabled';

rp(url).then(function(html) {
  console.log(html);
}).catch(function(err) {
  console.log(err);
});
