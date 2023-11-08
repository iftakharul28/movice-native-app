export type moviceCardType = {
  imdbID: string;
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
};
export type moviceRatingType = {
  Source: string;
  Value: string;
};
export type moviceDetailsType = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: moviceRatingType[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
};
