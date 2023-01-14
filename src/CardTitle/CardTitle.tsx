import React from "react";
import Container from "react-bootstrap/Container";
import {Badge, Col, Row} from "react-bootstrap";
import {cardPriorityConverter} from "../utils/card-priority-converter";

const CardTitle = ({item}: any) => {
  return (
    <Container>
      <Row style={{justifyContent: "space-between"}}>
        <Col style={{paddingLeft: "0px"}} xs="auto">
          {item.label}
        </Col>
        <Col xs="auto"/>
        <Col xs="auto">
          <Badge bg={cardPriorityConverter(item.priority)}
                 style={{position: "relative", left: "16px", bottom: "2px"}}>
            {item.priority}
          </Badge>
        </Col>
      </Row>

    </Container>
  )
}

export default CardTitle;