const { ScraperBase } = require("./base");

class ScraperMovie extends ScraperBase {
  constructor(id){
    super();

    this.id = id;
    this.data = { id: this.id };

    return this;
  }

  async parse(){
    const $ = this.$;
    let data = JSON.parse($('script[type="application/ld+json"]').html());

    data.director = Array.isArray(data.director) ? data.director.map(director => director.name) : [data.director.name];
    data.creator = data.creator.map(creator => {
      let name = '';
      if (typeof creator.name === 'undefined') {
        $('#titleDetails .txt-block a').each((j, element) => {
          const $element = $(element);

          if ($element.attr('href').indexOf(creator.url.slice(0, -1)) !== -1) {
            name = $element.text().trim()
          }
        })
      } else {
        name = creator.name;
      }

      return name;
    }).filter(c => !!c);

    const release = new Date(data.datePublished);

    const rating = parseFloat($('span[itemprop="ratingValue"]').text());
    const metascore = parseInt($('.metacriticScore').text().trim())

    const plot = $('.summary_text').text().trim();
    const storyline = $('#titleStoryLine').find('div.inline').eq(0).find('span').text().trim()

    this.data.poster = data.image;

    this.data.name = data.name;
    this.data.year = parseInt($('#titleYear').text().trim().slice(1, -1));
    this.data.release = release;

    this.data.rating = rating;
    this.data.metascore = metascore;
    this.data.certificate = data.contentRating;

    this.data.description = data.description;
    this.data.summary = plot;
    this.data.storyline = storyline;

    this.data.genres = data.genre;
    this.data.directors = data.director;
    this.data.creators = data.creator;

    return this.data;
  }
}

module.exports = { ScraperMovie };
module.exports.default = ScraperMovie;