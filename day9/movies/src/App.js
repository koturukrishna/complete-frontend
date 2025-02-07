import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "./App.css";
import Container from "react-bootstrap/Container";
import Alert from "@mui/material/Alert";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const moviesCollection = [
  {
    url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sankranthiki-vasthunam-et00418119-1731656543.jpg",
    name: "Sankranthiki Vasthunam",
    genre: "Action/Drama/Romantic",
    like: false,
    likes: 152,
    seats: 50,
    time: "10AM",
  },
  {
    url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICA4OS41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311772-dyqxbymvgu-portrait.jpg",
    name: "Game Changer",
    genre: "Action/Adventure",
    like: false,
    likes: 120,
    seats: 60,
    time: "11AM",
  },
  {
    url: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/daaku-maharaaj-et00419964-1731669684.jpg",
    name: "Daaku Maharaaj",
    genre: "Action/Drama/Thriller",
    like: false,
    likes: 160,
    seats: 3,
    time: "10AM",
  },
  {
    url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICA0NTguNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00356724-dynwtezcja-portrait.jpg",
    name: "Pushpa 2: The Rule",
    genre: "Action/Thriller",
    like: false,
    likes: 95,
    seats: "25",
    time: "12AM",
  },
];

function App() {
  const [moviesList, setMoviesList] = useState(moviesCollection);
  const [alertMsg, setAlertMsg] = useState({ success: false, error: false });

  const filteredLikeBtnHandle = (name) => {
    const updatedMoviesList = moviesList.map((movie) => {
      if (movie.name === name) {
        if (movie.like) {
          return { ...movie, like: !movie.like, likes: movie.likes - 1 };
        } else {
          return { ...movie, like: !movie.like, likes: movie.likes + 1 };
        }
      } else {
        return movie;
      }
    });

    setMoviesList(updatedMoviesList);
  };

  const ticketBookHandling = (name) => {
    const updatedList = moviesList.map((movie) => {
      if (movie.name === name) {
        if (movie.seats > 0) {
          setAlertMsg({ success: true, error: false });
          return { ...movie, seats: movie.seats - 1 };
        } else {
          setAlertMsg({ success: false, error: true });
          return movie;
        }
      } else {
        return movie;
      }
    });
    setMoviesList(updatedList);
    setTimeout(() => {
      setAlertMsg({ success: false, error: false });
    }, 1000);
  };

  return (
    <div className="App">
      <div>
        <h2 className="heading">Now Showing</h2>
        {/* <ul className="movies-container"> */}
        <div style={{ width: "100vw", padding: "25px" }}>
          <div>
            <Row className="row-card">
              {moviesList.map((movie) => (
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  xl={3}
                  key={movie.name}
                  className="movie-card"
                >
                  {/* <li key={movie.name} className="movie-card "> */}
                  <img src={movie.url} alt="" className="movie-image" />
                  <div className="title-genre">
                    <h4>{movie.name}</h4>
                    <h5 className="genre-name">{movie.genre}</h5>
                    <div className="like-card">
                      <button
                        className="like-btn"
                        onClick={() => filteredLikeBtnHandle(movie.name)}
                      >
                        {movie.like ? (
                          <ThumbUpIcon sx={{ color: "green" }} />
                        ) : (
                          <ThumbUpOutlinedIcon />
                        )}
                      </button>{" "}
                      <span>{movie.likes} likes</span>
                    </div>
                    <button
                      className="btn_book"
                      onClick={() => ticketBookHandling(movie.name)}
                    >
                      {`Book Ticket (${movie.seats} Seats)`}
                    </button>
                  </div>
                  {/* </li> */}
                </Col>
              ))}
            </Row>{" "}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {alertMsg.success && (
                <Alert severity="success" sx={{ width: "300px" }}>
                  Yours Ticket Booking Success
                </Alert>
              )}
              {alertMsg.error && (
                <Alert severity="info">Sorry Tickets Not Available</Alert>
              )}
            </div>
          </div>
        </div>

        {/* </ul> */}
      </div>
    </div>
  );
}

export default App;

// <div className="App">
// <div>
//   <h2 className="heading">Now Showing</h2>
//   <ul className="movies-container">
//     <Container>
//       <Row>
//         {moviesList.map((movie) => (
//           <li key={movie.name} className="movie-card col-6">
//             <Col xs={6} md={3}>
//               <img src={movie.url} alt="" className="movie-image" />
//               <div className="title-genre">
//                 <h3>{movie.name}</h3>
//                 <h4 className="genre-name">{movie.genre}</h4>
//                 <div className="like-card">
//                   <button
//                     className="like-btn"
//                     onClick={() => filteredLikeBtnHandle(movie.name)}
//                   >
//                     {movie.like ? (
//                       <ThumbUpIcon sx={{ color: "green" }} />
//                     ) : (
//                       <ThumbUpOutlinedIcon />
//                     )}
//                   </button>{" "}
//                   <span>{movie.likes} likes</span>
//                 </div>
//                 <button className="btn_book">
//                   {`Book Ticket (${movie.seats} Seats)`}
//                 </button>
//               </div>
//             </Col>
//           </li>
//         ))}
//       </Row>{" "}
//     </Container>
//   </ul>
// </div>
// </div>

{
  /* <Alert severity="success">This is a success Alert.</Alert>
<Alert severity="info">This is an info Alert.</Alert> */
}
