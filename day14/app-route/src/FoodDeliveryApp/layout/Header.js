import React from "react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
// import "../Styles/main.css";

import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.finalcart.cartList);
  const navigate = useNavigate();
  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  const cartItemsCount = cart.length;
  return (
    <nav class="navbar header-navbar">
      <ul className="nav-links container">
        <div to="/" className="food-delivery-app">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            style={{ width: "150px", height: "60px" }}
          />
        </div>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? " active-link" : "nav-link-item"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/restaurant"
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link-item"
            }
          >
            Restaurant
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link-item"
            }
          >
            Cart
            {cart.length > 0 && (
              <span className="cart-count-badge">
                {cartItemsCount !== 0 ? cartItemsCount : null}
              </span>
            )}
          </NavLink>
          <button className="btn btn-primary m-1" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Header;

// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Header = () => {
//   return (
//     <Navbar bg="#e3f2fd" variant="#e3f2fd" expand="lg" className="shadow-lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           <img
//             src="https://via.placeholder.com/40" // Replace with your logo URL
//             alt="Logo"
//             className="me-2"
//           />
//           DeliveryApp
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Link as={Link} to="/" className="mx-2">
//               Home
//             </Link>
//             <Nav.Link as={Link} to="/restaurants" className="mx-2">
//               Restaurants
//             </Nav.Link>
//             <Nav.Link as={Link} to="/cart" className="mx-2">
//               Cart
//             </Nav.Link>
//             <Nav.Link as={Link} to="/logout" className="mx-2 text-danger">
//               Logout
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;
