const movieTitleEl = document.getElementById("movie-title");
const movieTimeEl = document.getElementById("movie-time");
const movieSeatsAvaEl = document.getElementById("movie-seats");

const btnCreateEl = document.getElementById("btn-create");

btnCreateEl.onclick = () => {
  const movie = {
    title: movieTitleEl.value,
    time: movieTimeEl.value,
    seats: movieSeatsAvaEl.value,
  };

  console.log("Movie Details", movie);
  movieTitleEl.value = "";
  movieTimeEl.value = "";
  movieSeatsAvaEl.value = "";
};
