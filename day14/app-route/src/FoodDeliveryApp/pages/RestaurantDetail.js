import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { restaurentData } from "../../restaurantData/data";
import MenuItem from "../Menu/MenuItem";

const RestaurantDetail = () => {
  const { id } = useParams();
  //   console.log("Here the id is ", id);

  const selectedRestaurantData = restaurentData.filter((eachItem) => {
    return eachItem.id === id;
  });

  const { name, image, rating, reviews, menu, location } =
    selectedRestaurantData[0];
  const [meunList, setMenuList] = useState(menu);

  const handleSearchInput = (event) => {
    console.log("userinput", event.target.value);
    const searchInput = event.target.value;
    const filteredList = menu.filter((eachItem) => {
      return eachItem.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setMenuList(filteredList);
  };

  return (
    <div className="mt-5">
      <h3 className="restaurant-heading item-name">
        Restaurant details are here available
      </h3>

      <div className=" restaurant-card mt-5">
        <div className="restaurant-info">
          <img src={image} alt="" className="restaurant-detail-img" />
          <div className="card-body restaurantcard-details m-5">
            <h3 className="card-title rest-name">{name}</h3>
            <h5 className="card-text">location: {location}</h5>
            <h5 className="rating-reviews">
              ⭐ {rating} rating {reviews} reviews
            </h5>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h5>Menu items are</h5>
        <div class="input-group flex-nowrap" style={{ width: "450px" }}>
          <input
            type="text"
            class="form-control"
            placeholder="search food item"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onChange={handleSearchInput}
          />
        </div>
        <div class="row mt-5 ">
          {meunList.map((eachMenu) => (
            <div
              className="col-12  col-xl-6  mt-3 menucard-item"
              key={eachMenu.id}
            >
              <MenuItem menuDetails={eachMenu} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;

{
  /* <div class="container-fluid text-center">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
   
  </div>
</div> */
}
