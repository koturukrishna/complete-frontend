import React from "react";

const Menu = () => {
  return (
    <div>
      <h3>Menu Component</h3>
      <div class="card" style={{ width: "18rem;" }}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h2 class="card-title">Menu Component</h2>
          <p class="card-text">
            Menu Menu Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Esse corporis et distinctio tempore eum perferendis asperiores,
            expedita labore ipsam voluptas fugiat dicta iure reprehenderit
            debitis! Tempora iste totam at maxime.
          </p>
          <button class="btn btn-primary">Menu Component</button>
          <img
            src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=1000"
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;

const restaurent = [
  {
    id: "1",
    name: "Paradise Biryani",
    cuisine: "Hyderabadi, Mughlai",
    rating: 4.5,
    reviews: 15420,
    priceRange: "₹₹",
    location: "Secunderabad",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=1000",
    deliveryTime: "30-35 min",
    menu: [
      {
        id: "p1",
        name: "Hyderabadi Chicken Biryani",
        description:
          "Aromatic basmati rice cooked with tender chicken pieces and authentic spices",
        price: 349,
        image:
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1000",
        category: "Biryani",
        isVeg: false,
        rating: 4.6,
        reviews: 8250,
      },
      {
        id: "p2",
        name: "Mutton Biryani",
        description:
          "Tender mutton pieces cooked with fragrant rice and special spices",
        price: 449,
        image:
          "https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&q=80&w=1000",
        category: "Biryani",
        isVeg: false,
        rating: 4.7,
        reviews: 6120,
      },
    ],
  },
  {
    id: "2",
    name: "Bawarchi",
    cuisine: "North Indian, Biryani",
    rating: 4.3,
    reviews: 12350,
    priceRange: "₹₹",
    location: "RTC X Roads",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000",
    deliveryTime: "35-40 min",
    menu: [
      {
        id: "b1",
        name: "Special Chicken Biryani",
        description:
          "Signature biryani with premium chicken cuts and secret spice blend",
        price: 329,
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=1000",
        category: "Biryani",
        isVeg: false,
        rating: 4.4,
        reviews: 5230,
      },
    ],
  },
  {
    id: "3",
    name: "Chutneys",
    cuisine: "South Indian",
    rating: 4.4,
    reviews: 9840,
    priceRange: "₹",
    location: "Jubilee Hills",
    image:
      "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=1000",
    deliveryTime: "25-30 min",
    menu: [
      {
        id: "c1",
        name: "Masala Dosa",
        description: "Crispy dosa with spiced potato filling and chutneys",
        price: 149,
        image:
          "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1000",
        category: "Breakfast",
        isVeg: true,
        rating: 4.5,
        reviews: 3240,
      },
    ],
  },
  {
    id: "4",
    name: "Shah Ghouse",
    cuisine: "Mughlai, Arabian",
    rating: 4.2,
    reviews: 11230,
    priceRange: "₹₹",
    location: "Tolichowki",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000",
    deliveryTime: "40-45 min",
    menu: [
      {
        id: "s1",
        name: "Haleem",
        description: "Rich and creamy wheat preparation with meat and lentils",
        price: 299,
        image:
          "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&q=80&w=1000",
        category: "Specials",
        isVeg: false,
        rating: 4.6,
        reviews: 4520,
      },
    ],
  },
  {
    id: "5",
    name: "Minerva Coffee Shop",
    cuisine: "South Indian, Chinese",
    rating: 4.3,
    reviews: 8750,
    priceRange: "₹",
    location: "Himayatnagar",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000",
    deliveryTime: "30-35 min",
    menu: [
      {
        id: "m1",
        name: "Filter Coffee",
        description: "Traditional South Indian filter coffee",
        price: 49,
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=1000",
        category: "Beverages",
        isVeg: true,
        rating: 4.7,
        reviews: 2890,
      },
    ],
  },
  {
    id: "6",
    name: "Karachi Bakery",
    cuisine: "Bakery, Desserts",
    rating: 4.6,
    reviews: 13420,
    priceRange: "₹₹",
    location: "Banjara Hills",
    image:
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=1000",
    deliveryTime: "25-30 min",
    menu: [
      {
        id: "k1",
        name: "Fruit Biscuits",
        description: "Famous fruit-flavored cookies",
        price: 199,
        image:
          "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=1000",
        category: "Bakery",
        isVeg: true,
        rating: 4.8,
        reviews: 6230,
      },
    ],
  },
  {
    id: "7",
    name: "Ohri's Jiva Imperia",
    cuisine: "North Indian, Continental",
    rating: 4.4,
    reviews: 7840,
    priceRange: "₹₹₹",
    location: "Banjara Hills",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000",
    deliveryTime: "45-50 min",
    menu: [
      {
        id: "o1",
        name: "Butter Chicken",
        description: "Creamy tomato-based curry with tender chicken",
        price: 449,
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=1000",
        category: "Main Course",
        isVeg: false,
        rating: 4.5,
        reviews: 3420,
      },
    ],
  },
  {
    id: "8",
    name: "Cream Stone",
    cuisine: "Ice Cream, Desserts",
    rating: 4.5,
    reviews: 9630,
    priceRange: "₹₹",
    location: "Jubilee Hills",
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=1000",
    deliveryTime: "20-25 min",
    menu: [
      {
        id: "cs1",
        name: "Death by Chocolate",
        description: "Rich chocolate ice cream with brownies and sauce",
        price: 249,
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=1000",
        category: "Desserts",
        isVeg: true,
        rating: 4.7,
        reviews: 4820,
      },
    ],
  },
  {
    id: "9",
    name: "Pista House",
    cuisine: "Mughlai, North Indian",
    rating: 4.3,
    reviews: 10240,
    priceRange: "₹₹",
    location: "Nampally",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000",
    deliveryTime: "35-40 min",
    menu: [
      {
        id: "ph1",
        name: "Special Haleem",
        description: "Award-winning haleem with premium meat",
        price: 349,
        image:
          "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=1000",
        category: "Specials",
        isVeg: false,
        rating: 4.6,
        reviews: 5630,
      },
    ],
  },
  {
    id: "10",
    name: "Concu",
    cuisine: "Desserts, Beverages",
    rating: 4.7,
    reviews: 6840,
    priceRange: "₹₹₹",
    location: "Jubilee Hills",
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1000",
    deliveryTime: "30-35 min",
    menu: [
      {
        id: "con1",
        name: "Red Velvet Cake",
        description: "Classic red velvet cake with cream cheese frosting",
        price: 399,
        image:
          "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80&w=1000",
        category: "Desserts",
        isVeg: true,
        rating: 4.8,
        reviews: 3240,
      },
    ],
  },
];
