const axios = require("axios");
const { ScraperMovie } = require("./utils/scrapers/movie");

function ImdbJs(){
  this.baseUrl = "https://www.imdb.com";
  this.api = axios.create({ baseURL: this.baseUrl });

  return this;
}

ImdbJs.prototype.movie = async function movie(id) {
  const scraper = new ScraperMovie(id);

  try{
    const response = await this.api.get(`/title/${id}/`);
    const body = response.data;
    const movie = scraper.content(body);
    const data = movie.parse();

    return data;
  }
  catch (error) {
    if(error && error.response && error.response.status){
      return error.response.data;
    }

    return {
      message: 'Unknown error!'
    }
  }

}

module.exports = ImdbJs;
