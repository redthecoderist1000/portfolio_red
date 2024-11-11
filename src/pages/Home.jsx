import React from "react";
import NavBar from "../components/NavBar";
import { Container, Row } from "react-bootstrap";
import "./css/home.css";
import profile from "../assets/profile.jpg";
import html from "../assets/tech_logo/html.png";
import css from "../assets/tech_logo/css.png";
import php from "../assets/tech_logo/php.png";
import java from "../assets/tech_logo/java.png";
import react from "../assets/tech_logo/react.png";
import js from "../assets/tech_logo/js.png";
import flutter from "../assets/tech_logo/flutter.png";
import sql from "../assets/tech_logo/sql.png";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Home() {
  const tech_logo = [java, html, css, php, js, sql, react, flutter];

  return (
    <>
      <NavBar />
      <Container className="home_con mt-5">
        <h1 className="name m-0">red zinfandel ochavillo</h1>
        <Row className="position_row mt-4" xs={2} md={4}>
          <p>job title</p>
          <p>job title</p>
          <p>job title</p>
        </Row>
        <Row className="about_row mt-5" xs={2} md={4}>
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
        <Row className="tech mt-5 " xs={2} md={4}>
          {tech_logo.map((data) => (
            <Col style={{ width: "fit-content" }} xs={6} md={4}>
              <Image src={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
