// Theater Data
const cinema = {
  name: "AMB Cinemas",
  location: "HiTech City",
  movies: [
    {
      title: "Kalki",
      shows: ["10AM", "3PM"],
      seats: [60, 60],
    },
    {
      title: "Pushpa 2",
      shows: ["11AM", "4PM"],
      seats: [60, 60],
    },
  ],
};

// Display in Console
console.log("Theater Name:", cinema.name);
console.log("First Movie:", cinema.movies[0].title);
console.log("Second Movie", cinema.movies[1].title);
