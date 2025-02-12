import React, { useEffect, useState } from "react";
import { restaurentData } from "../../restaurantData/data";
import RestaurantCard from "../restaurant/RestaurantCard";

const Restaurant = () => {
  const [restaurantList, setRestaurantList] = useState(restaurentData);

  const [userSearchInput, setUserSearchInput] = useState("");

  const handleSearchInput = (event) => {
    console.log("userinput", event.target.value);
    setUserSearchInput(event.target.value);
    const searchInput = event.target.value;
    const filteredList = restaurentData.filter((eachItem) => {
      return eachItem.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setRestaurantList(filteredList);
  };

  const handelSortOption = (event) => {
    console.log(event.target.value);
    const sortOption = event.target.value;
    const sortedData = [...restaurentData].sort((a, b) => {
      if (sortOption === "low") {
        return a.priceRange - b.priceRange;
      } else {
        return b.priceRange - a.priceRange;
      }
    });
    setRestaurantList(sortedData);
  };

  return (
    <div class="container-fluid text-center">
      <h3 className="mt-2 item-name mt-3">Popular Restaurants List</h3>
      <div class="d-flex flex-column flex-md-row align-items-center justify-content-center  bg-white p-3">
        <input
          type="text"
          class="form-control me-md-3 mb-2 mb-md-0 w-50 w-md-50"
          placeholder="search restaurant...."
          onChange={handleSearchInput}
        />

        <select className="form-select w-auto" onChange={handelSortOption}>
          <option selected>Sort By</option>
          <option value="low">Lowest</option>
          <option value="high">Highest</option>
        </select>
      </div>
      <hr />
      <div class="row mt-5">
        {restaurantList.map((eachItem) => (
          <div
            className="col-12 col-xs-12 col-md-6 col-xl-4 "
            key={eachItem.id}
          >
            <RestaurantCard details={eachItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
