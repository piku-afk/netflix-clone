export const API_KEY = 'bdb8fef68bf3f1ca3737e559f6051bc1';

export const base_url = 'https://api.themoviedb.org/3/';
export const image_url = 'https://image.tmdb.org/t/p/original';

export const request = {
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_networks=213`,
  fetchPopular: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `tv/week?api_key=${API_KEY}`,
  fetchAction: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10759`,
  fetchComedy: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchCrime: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=80`,
  fetchMystery: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  fetchSifi: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10765`
}
