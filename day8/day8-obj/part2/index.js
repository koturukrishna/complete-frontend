// const screenDivEl = document.getElementById("screen");
// screenDivEl.style.backgroundColor = "cyan";
// screenDivEl.style.width = "400px";

// // screenDivEl.innerHTML = `<h4>Now it is Showing</h4>`;
// let headingEl = document.createElement("h5");
// headingEl.textContent = "Hello Krishna";
// const imgEl = document.createElement("img");
// imgEl.src =
//   "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTI5LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413205-htwrduumzk-portrait.jpg";
// imgEl.style.width = "240px";
// imgEl.style.height = "200pxs";
// screenDivEl.appendChild(headingEl);
// screenDivEl.appendChild(imgEl);

// const btnEl = document.createElement("button");
// btnEl.textContent = "6PM Show";
// screenDivEl.appendChild(btnEl);

// btnEl.onclick = () => {
//   console.log("Tickets are Available");
// };

const moviesList = [
  {
    name: "Sky Force",
    genre: "Action/Historical/Thriller",
    imgUrl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NjIuNUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00371539-fnkuqcgrmy-portrait.jpg",
  },
  {
    name: "Ramayana:Legend Rama",
    genre: "Adventure/Mythological",
    imgUrl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTI5LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413205-htwrduumzk-portrait.jpg",
  },
  {
    name: "Emergency",
    genre: "Drama/Historical",
    imgUrl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICA5LjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00334219-xjddtyvfbk-portrait.jpg",
  },
  {
    name: "Azad",
    genre: "Action/Drama/Period",
    imgUrl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny8xMCAgMi44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00418422-ljtpwzpjxq-portrait.jpg",
  },
];

const screenDivEl = document.getElementById("screen");
const renderMoviesList = moviesList.map(
  (movie) =>
    `<div class="card col-3 me-5" style="width: 18rem;">
  <img src=${movie.imgUrl} class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${movie.name}</h5>
    <p class="card-text">${movie.genre}</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>
</div>
`
);

screenDivEl.innerHTML = renderMoviesList.join("");
