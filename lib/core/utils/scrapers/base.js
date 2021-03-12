const cheerio = require('cheerio');
const {each, isEmpty} = require('underscore');

class ScraperBase{
  constructor(){
    this.each = each;
    this.isEmpty = isEmpty;
  }

  content(body){
    this.$ = cheerio.load(body);

    return this;
  }
}

module.exports = { ScraperBase };
module.exports.default = ScraperBase;