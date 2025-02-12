import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { details } = props;
  const { image, id, name, cuisine, rating, reviews } = details;
  return (
    <Link to={`/restaurant/${id}`} className="restaurantcard">
      <div class="" style={{ display: "flex" }}>
        <img
          src={image}
          alt=""
          style={{
            width: "210px",
            height: "200px",
            margin: "8px",
            borderRadius: "10px",
          }}
        />
        <div className="restaurantcard-details">
          <h3 className="card-title item-name">{name}</h3>
          <h5 className="card-text">{cuisine}</h5>
          <span className="rating-reviews">
            ⭐{rating} rating {reviews} reviews
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
