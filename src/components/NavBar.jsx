import { Navbar, Nav } from "react-bootstrap";
import React from "react";

// const NavBar = (props) => (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand href="#home">{props.title} - Strive for food</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="ml-auto">
//                 {
//                     props.links.map(link => <Nav.Link key={link} href={'#' + link.toLowerCase()}>{link}</Nav.Link>)
//                 }
//             </Nav>
//         </Navbar.Collapse>
//     </Navbar>
// )

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: true };
  }
  render() {
    if (this.state.status === true) {
      console.log("Loading component");
      return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            {this.props.title} - Strive for food
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {this.props.links.map((link) => (
                <Nav.Link key={link} href={"#" + link.toLowerCase()}>
                  {link}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    } else {
      console.log("ERROR or already loaded");
    }
  }
}

export default NavBar;

// functional components are a touch faster than class based ones
