import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Offcanvas, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import nav1 from '../assets/nav1.webp';
import nav2 from '../assets/nav2.jpg';
import nav3 from '../assets/nav3.webp';
import nav4 from '../assets/nav4.webp';
import nav5 from '../assets/nav5.jpg';
import nav6 from '../assets/nav6.webp';
import "../css/Topbar.css";
import { FaCartPlus } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Topbar() {
  const MyData=useSelector((state)=>state.addCart.cart);
  console.log(MyData);
  const DataCount= MyData.length;
  

  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  return (
    <>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            @HPHONE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto" >
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
              <NavDropdown title="SHOP" id="navbarScrollingDropdown">
                <div className="dropdown-with-images">
                  <div className="dropdown-column">
                    <NavDropdown.Item as={Link} to="/earbuds">
                      <img src={nav1} alt="Earbuds" className="dropdown-image" />
                      <span>True Wireless Earbuds</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/speaker">
                      <img src={nav2} alt="Speakers" className="dropdown-image" />
                      <span>Wireless Speakers</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/neckband" className="d-flex align-items-center">
                          <img src={nav3} alt="Neckbands" className="dropdown-image" />
                          <span>Neckbands</span>
                        </NavDropdown.Item>
                      </div>
                      {/* Second Column */}
                      <div className="dropdown-column">
                        <NavDropdown.Item as={Link} to="/headphone" className="d-flex align-items-center">
                          <img src={nav4} alt="Headphones" className="dropdown-image" />
                          <span>Wireless Headphones</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/earphone" className="d-flex align-items-center">
                          <img src={nav5} alt="Earphones" className="dropdown-image" />
                          <span>Wired Earphones</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/Party-Speakers" className="d-flex align-items-center">
                          <img src={nav6} alt="Party Speakers" className="dropdown-image" />
                          <span>Party Speakers</span>
                        </NavDropdown.Item>
                  </div>
                </div>
              </NavDropdown>
              <Nav.Link as={Link} to="/">
                OFEERS
              </Nav.Link>
              <Nav.Link as={Link} to="/">
               CONTACT
              </Nav.Link>
            </Nav>
            {/* <Button  onClick={handleShow} className="cart-button"> */}
            <FaUserCog style={{fontSize:"28px",color:"black" ,margin:"20px"}} />
            <div className="cart-container position-relative mx-3">
              <a onClick={handleShow} style={{ cursor: "pointer" }}>
                {/* <FaShoppingBag className="nav-icon" /> */}
                <FaCartPlus  onClick={handleShow} style={{fontSize:"25px",color:"black"}}/>

              </a>
              {DataCount<=0?"":
                // <span className="cart-count position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill">
                <span  style={{padding:"7px", borderRadius:"50%", marginLeft:"1px", border:"1px solid grey", backgroundColor:"lightblue"}}>
              {DataCount}
                </span>
              }
            </div>
            {/* </Button> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Cart Offcanvas */}
      <Offcanvas show={showCart} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="cart-item">
            <p>HP Deluxe Headset</p>
            <p>Rs. 910.00</p>
          </div>
          <Button variant="primary" className="w-100 mb-2">
            Proceed to Checkout
          </Button>
          <Button variant="secondary" className="w-100" onClick={handleClose}>
            View Cart
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Topbar;
