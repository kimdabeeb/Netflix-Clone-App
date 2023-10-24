const API_KEY = '53865c3fe9180d5b39412fe6f99273db';

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchCrimeMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchFamilyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchAnimationMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
