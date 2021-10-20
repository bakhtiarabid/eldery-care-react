import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";

const Header = () => {
   const { user, logOut } = useAuth();
   return (
      <>
         <Navbar
            bg="dark"
            variant="dark"
            sticky="top"
            collapseOnSelect
            expand="lg"
         >
            <Container>
               <Navbar.Brand href="/home">Eldery Care</Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as={HashLink} to="/home" className="text-white">
                     Home
                  </Nav.Link>
                  <Nav.Link as={HashLink} to="/about" className="text-white">
                     About Us
                  </Nav.Link>
                  <Nav.Link as={HashLink} to="/contact" className="text-white">
                     Contact Us
                  </Nav.Link>

                  {user?.email ? (
                     <Button onClick={logOut} variant="dark">
                        Logout
                     </Button>
                  ) : (
                     <Nav.Link as={Link} to="/login" className="text-white">
                        Login/Register
                     </Nav.Link>
                  )}
                  <Navbar.Text>
                     Signed in as:{" "}
                     <a href="#login">
                        {user?.displayName}{" "}
                        <img
                           src={user.photoURL}
                           className="w-25 rounded-circle ms-3"
                           alt=""
                        />
                     </a>
                  </Navbar.Text>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default Header;
