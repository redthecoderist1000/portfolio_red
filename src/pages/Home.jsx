import React from "react";
import NavBar from "../components/NavBar";
import { Container, Row } from "react-bootstrap";
import "./css/home.css";
import profile from "../assets/profile.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <h1 className="text-center">red ochavillo</h1>
        <div className="d-flex justify-content-evenly">
          <p>text</p>
          <p>text</p>
          <p>text</p>
        </div>
        <Row className="justify-content-evenly" xs={2} md={4}>
          <Col>
            <Image src={profile} rounded />
          </Col>
          <Card className="about_card" style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>about me</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam rem sunt, exercitationem inventore culpa magnam
                explicabo porro corrupti velit animi maiores non hic incidunt
                modi doloremque esse quisquam voluptas distinctio!
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
