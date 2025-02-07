import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BarChartIcon from "@mui/icons-material/BarChart";

const imageUrl =
  "https://media.licdn.com/dms/image/v2/D5603AQFxWY-DTwxRbw/profile-displayphoto-shrink_200_200/B56ZRK8L9qGsAc-/0/1736424080393?e=1744243200&v=beta&t=96faAJCH3JWEdSe3NePRuMV1FcSJvULzqV5FuqvyJdg";

function App() {
  return (
    <div className="App">
      <div className="top-div">
        <div className="card profile-cart">
          <div className="profile-card">
            <img
              src={imageUrl}
              className="card-img-top avatar"
              alt="Shiva Kumar"
            />
            <div className="card-body">
              <h5 className="card-title">Shiva Kumar</h5>
              <p className="card-text">
                3,844 Follwers
                <span className="view-more"> &nbsp;&nbsp;Manage followers</span>
              </p>
            </div>
          </div>
          <div>
            <button type="button" className="btn btn-success btn-style">
              Posts
            </button>
            <button type="button" className="  btn-style">
              Comments
            </button>
            <button type="button" className="  btn-style">
              Videos
            </button>
            <button type="button" className="  btn-style">
              Images
            </button>
            <button type="button" className="  btn-style">
              Documentation
            </button>
          </div>
        </div>
        {userPost.map((each) => {
          const { title, likesCount, comments, reposts, impression, time } =
            each;
          return (
            <div className="card profile-cart" style={{ marginTop: "8px" }}>
              <div className="profile-card">
                <img
                  src={imageUrl}
                  className="card-img-top avatar"
                  alt="Shiva Kumar"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Shiva Kumar <span className="you">.You</span>
                  </h5>
                  <p
                    className="card-text heading"
                    style={{ marginTop: "-10px" }}
                  >
                    Frontend Engineer specializing in MERN/MEAN Stack |
                    Creating....
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      margin: "0px",
                      marginTop: "-12px",
                    }}
                  >
                    {time}.🌐
                  </p>
                </div>
                <div style={{ marginRight: "15px", marginTop: "-30px" }}>
                  <i className="bi bi-three-dots"></i>
                </div>
              </div>
              <div>
                <p className="post-title">{title} </p>
                <p
                  className="heading"
                  style={{
                    textAlign: "end",
                    marginTop: "-22px",
                  }}
                >
                  ...more
                </p>
                <div
                  className="like-comment-sec"
                  style={{ marginTop: "-10px" }}
                >
                  <p className="like-icons">
                    <span className="icon-combine">👍 </span>
                    <span className="icon-combine"> ❤️‍🔥 </span> <span>💡</span>
                    {likesCount}
                  </p>
                  <p className="heading">
                    {comments} comments . {reposts} reposts
                  </p>
                </div>
                <hr style={{ marginTop: "-10px" }} />
                <div className="bottom-section">
                  <img
                    src={imageUrl}
                    alt="small-image"
                    className="small-image"
                  />
                  <div className="icon-name">
                    <i className="bi bi-hand-thumbs-up"></i>
                    <p className="heading">Like</p>
                  </div>
                  <div className="icon-name">
                    <i className="bi bi-chat-left-text"></i>
                    <p className="heading">Comment</p>
                  </div>
                  <div className="icon-name">
                    <i className="bi bi-repeat"></i>{" "}
                    <p className="heading">Repost</p>
                  </div>
                  <div className="icon-name">
                    <i className="bi bi-send"></i>{" "}
                    <p className="heading">Send</p>
                  </div>
                </div>
                <div className="impressions">
                  <div style={{ fontWeight: "600", display: "flex" }}>
                    <BarChartIcon />
                    <h5 style={{ marginLeft: "10px" }}>
                      {" "}
                      {impression} impressions
                    </h5>
                  </div>
                  <p
                    style={{ color: "#2196f3", marginRight: "10px" }}
                    className="view-more"
                  >
                    View
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

const userPost = [
  {
    title: "🔥 LISTEN UP, YOUNG DEVS: A REAL TALK ABOUT AI & CAREERS 🔥",
    time: "23h",
    likesCount: "45",
    comments: "4",
    reposts: "4",
    impression: "1,125",
  },
  {
    title: "🔥 WHY SOUTH INDIAN TECH EDUCATION IS FAILING US IN 2025 🔥",
    time: "2d",
    likesCount: "69",
    comments: "10",
    reposts: "1",
    impression: "2,447",
  },
  {
    title:
      "🚀 Finally Launched: My EdTech Startup DevGnan: Building Real Engineers",
    time: "5d",
    likesCount: "102",
    comments: "16",
    reposts: "2",
    impression: "1,647",
  },
];
