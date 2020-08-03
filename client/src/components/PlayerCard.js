import React from 'react';

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
    <Container>
      <Row>
        <Col>
          <Image src={props.profileIconUrl} roundedCircle width='100' />
        </Col>
        <Col>{props.summonerName}</Col>
        <Col>{props.summonerLevel}</Col>
      </Row>
    </Container>
  );
};
