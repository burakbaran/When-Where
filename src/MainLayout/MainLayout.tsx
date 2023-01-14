import Container from "react-bootstrap/Container";
import {Button, Card, Col, Row} from "react-bootstrap";
import React from "react";
import {MainLayoutProps} from "./MainLayout.types";
import "./MainLayout.styles.css";
import {cardPriorityConverter} from "../utils/card-priority-converter";


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
                            border="dark"
                            bg={cardPriorityConverter(item.priority)}
                            text="white"
                            >
                                <Card.Body>
                                    <Card.Title>{item.label}</Card.Title>
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
};

export default MainLayout;