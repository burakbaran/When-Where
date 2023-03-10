import Container from "react-bootstrap/Container";
import {Button, Card, Col, Row} from "react-bootstrap";
import React from "react";
import {MainLayoutProps} from "./MainLayout.types";
import "./MainLayout.styles.css";
import {cardPriorityConverter} from "../utils/card-priority-converter";
import CardTitle from "../CardTitle/CardTitle";


const MainLayout = ({
                      cardList
                    }: MainLayoutProps) => {

    return (
      <Container>
        <Row className="show-grid">
          {cardList.map((item) => {
            return (
              <Col xs="auto" style={{justifyContent: "flex-start", display: "flex", marginTop: "1rem"}}>
                <Card key={item.id} className="card"
                      border={cardPriorityConverter(item.priority)}
                      bg="dark"
                      text="light"
                >
                  <Card.Body>
                    <Card.Title><CardTitle item={item}/></Card.Title>
                    <Card.Text>
                      {item.detail}
                    </Card.Text>
                    {/*TODO: open new modal for details*/}
                    <Button variant="primary">Görüntüle</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    );
  }
;

export default MainLayout;