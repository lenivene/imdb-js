<div align="center">
    <img alt="Logo" title="imdb-js" width="200px" style="max-width:200px;" src=".github/logo.svg">
    <br><br>
    <h1 style="border:0;font-weight:bold;text-transform:uppercase;margin:0">Imdb.js</h1>
    <b>Consulta de informações no IMDB</b>
</div>

# 📔 Indíce

- [📔 Indíce](#-indíce)
- [📖 Sobre](#-sobre)
- [📚 Como usar?](#-como-usar)
- [📝 License](#-license)

# 📖 Sobre

O _Imdb.js_ é um modulo que faz scraper no site imdb e retorna informaçãos do filme

# 📚 Como usar?

```ts
import ImdbJs from "@lenivene/imdb-js";

const imdb = new ImdbJs();

imdb.movie('tt0993846').then(cnpj => {
  /**
   * Example result
   * @return {
   *   id: 'tt0993846',
   *   poster: 'https://..........kFtZTgwNjIyOTg2MDE@._V1_.jpg',
   *   name: 'The Wolf of Wall Street',
   *   year: 2013,
   *   release: 2013-12-25T00:00:00.000Z,
   *   rating: 8.2,
   *   metascore: 75,
   *   certificate: 'R',
   *   description: 'The Wolf of W.........',
   *   storyline: `In th.......`,
   *   genres: [ 'Biography', 'Crime', 'Drama' ],
   *   directors: [ 'Martin Scorsese' ],
   *   creators: [
   *     'Terence Winter',
   *     'Jordan Belfort',
   *     'Red Granite Pictures',
   *     'Appian Way',
   *     'Sikelia Productions'
   *   ]
   * }
  */
  console.log("Result::", result);
})
.catch(error => {
  console.log(error);
})
```

# 📝 License

The logo is fully licensed by its creator.
This project is under the MIT license.
