import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

/**
 * Player card.
 * @param {Object} props
 * @param {string} props.summonerName
 * @param {number} props.summonerLevel
 * @param {string} props.profileIconUrl
 */
export const PlayerCard = (props) => {
  return (
    <Card style={{ width: '25rem' }}>
      <Row>
        <Col xs={4}>
          <Image src={props.profileIconUrl} roundedCircle width='100' />
        </Col>
        <Col>
          <Card.Header>{props.summonerName}</Card.Header>
          <Card.Text>{props.summonerLevel}</Card.Text>
        </Col>
      </Row>
    </Card>
  );
};
