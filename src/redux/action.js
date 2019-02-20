export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
function requestMovies() {
  return {
    type: REQUEST_MOVIES,
  };
}
function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    movies: movies.reduce((movie, next) => {
      if (next.Title) {
        next.Title = next.Title.replace(/[^\w* -]/g, '')
          .toLowerCase()
          .replace(/\b\w/g, l => l.toUpperCase());
        movie.push(next);
      }
      return movie;
    }, []),
    receivedAt: Date.now(),
  };
}

export const fetchMovies = s => {
  const themoviedbUrl =
    'https://api.themoviedb.org/3/discover/movie?api_key=8d0d6a07a0639c07eb40adb1d36d1f31';
  const omdbapiUrl = 'https://www.omdbapi.com/?plot=full&apikey=bc2b28c9&t=';
  return dispatch => {
    dispatch(requestMovies());
    let movies = [];
    return fetch(themoviedbUrl)
      .then(res => res.json())
      .then(json =>
        json.results.map((v, i) =>
          fetch(`${omdbapiUrl}${v.title}`)
            .then(res => res.json())
            .then(res => movies.push(res))
            .catch(e => console.log(e))
        )
      )
      .then(promises => {
        Promise.all(promises).then(res => {
          dispatch(receiveMovies(movies));
        });
      })
      .catch(e => console.log(e));
  };
};

export const updateMovies = movies => {
  return dispatch => {
    dispatch(receiveMovies(movies));
  };
};
