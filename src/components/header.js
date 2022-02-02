import React from 'react'
import "./header.css";
import * as ReactBootsrap from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <h3>Bmart Supermarket</h3>
      <span>Ontario London</span>
      {/* hdr */}
      <ReactBootsrap.Navbar collapseOnSelect expand="lg" bg="grey" variant="dark" className='nvbr'>
  <ReactBootsrap.Container>
  {/* <ReactBootsrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootsrap.Navbar.Brand> */}
  <ReactBootsrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootsrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootsrap.Nav className="me-auto">
      <ReactBootsrap.Nav.Link href="#features">Home</ReactBootsrap.Nav.Link>
      <ReactBootsrap.Nav.Link href="#pricing">Transaction</ReactBootsrap.Nav.Link>
      <ReactBootsrap.Nav.Link href="#pricing">Cashier</ReactBootsrap.Nav.Link>
      <ReactBootsrap.Nav.Link href="#pricing">Setting</ReactBootsrap.Nav.Link>
    </ReactBootsrap.Nav>
    <ReactBootsrap.Nav>
     
      {/* <ReactBootsrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </ReactBootsrap.Nav.Link> */}
    </ReactBootsrap.Nav>
  </ReactBootsrap.Navbar.Collapse>
  </ReactBootsrap.Container>
</ReactBootsrap.Navbar>
      {/* hdr end */}
     {/* <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" to="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> 
  <div className="navbar-nav"> 
      <a className="nav-item nav-link active" href="#">Home </a>
      <a className="nav-item nav-link" href="#">Transaction</a>
      <a className="nav-item nav-link" href="#">Cashier</a>
      <a className="nav-item nav-link" href="#">Setting</a>
    </div> 
   </div> 
</nav> */}
<div className='row rw'>
  <div className='col-md-12'>
  <form className="form-inline frm">
    <input className="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn  my-2 my-sm-0 bt" type="submit">Search</button>
  </form>
  </div>

</div>

    </div>
  )
}


