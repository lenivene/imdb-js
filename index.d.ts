/**
 * Certificate types
 * @uri https://help.imdb.com/article/contribution/titles/certificates/GU757M8ZJ9ZPXB39
 */
type CertificateTypes = string;

export interface ImdbMovieData {
  id: string;
  poster: string;
  name: string;
  year: number;
  release: Date;
  rating: number;
  metascore: number;
  certificate: CertificateTypes;
  description: string;
  plot: string;
  storyline: string;
  genres: Array<string>;
  directors: Array<string>;
  creators: Array<string>;
}

declare module "imdb-js"{
  export default class ImdbJs{
    constructor();

    movie(movie_id: string): Promise<ImdbMovieData>
  }
}
