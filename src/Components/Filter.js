import React from 'react'
import "../CSS/Filter.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Filter = ({setvalueTitle}) => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiarynav">
      <Container fluid>
        <Navbar.Brand className='titre' href="#">TurkDIZISI</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0nav"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link > <Link to={"/"}> Home </Link></Nav.Link>
            <Nav.Link href="#action3">The last episodes</Nav.Link>
            <Nav.Link href="#action4">My list</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setvalueTitle(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Filter