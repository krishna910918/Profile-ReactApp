
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts

// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";



import Header from "components/Headers/Header.js";

const Index = (props) => {
  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container>
        <h1 style={{marginBottom:"200px",textAlign:"center",marginTop:"100px",fontSize:"50px"}}> Welcome to Dashboard !!! </h1>
      </Container>
    </>
  );
};

export default Index;
