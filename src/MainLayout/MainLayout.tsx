import Container from "react-bootstrap/Container";
import {Button, Card, Col, Row} from "react-bootstrap";
import React from "react";
import {MainLayoutProps} from "./MainLayout.types";


const MainLayout = ({
                        cardList
                    }: MainLayoutProps) => {
    const list = () => {
        const a = [];
        for (let i = 0; i < 100; i++) {
            a.push(i);
        }
        return a;
    };

    return (
        <Container>
            <Row className="show-grid">
                {list().map((item) => {
                    return (
                        <Col xs="auto" style={{justifyContent: "flex-start", display: "flex", marginTop: "1rem" }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
                {/*<Col sm={8}>sm=8</Col>*/}
                {/*<Col sm={4}>sm=4</Col>*/}
            </Row>
            {/*<Row>*/}
            {/*    <Col sm>sm=true</Col>*/}
            {/*    <Col sm>sm=true</Col>*/}
            {/*    <Col sm>sm=true</Col>*/}
            {/*</Row>*/}
        </Container>
    );
};

export default MainLayout;