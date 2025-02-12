import React from "react";
import "../Styles/main.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateToRestauranr = () => {
    navigate("/restaurant");
  };

  return (
    <div className="home-section">
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-6">
            <h2 className="home-heading">
              Delicious Food Delivered to Your Doorstep!
            </h2>
            <p className="card-text home-description">
              Order from your favorite restaurants and enjoy fresh, hot meals
              anytime, anywhere. Craving something delicious? With our food
              delivery service, you can enjoy your favorite meals from the best
              restaurants in town, delivered straight to your doorstep. Whether
              it’s a steaming plate of biryani, a cheesy pizza, a juicy burger,
              or a refreshing sushi platter, we bring the best flavors to you
              with just a few clicks. No more waiting in long lines or dealing
              with traffic—simply browse, order, and relax while we take care of
              the rest. With fast delivery, exclusive discounts, and a seamless
              ordering experience, satisfying your cravings has never been
              easier. Treat yourself to a hassle-free dining experience today!
            </p>
            <div>
              <button
                className="btn btn-primary m-3"
                onClick={navigateToRestauranr}
              >
                Order Now
              </button>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-6">
            <img
              src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
              alt=""
              className="home-restaurant-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
