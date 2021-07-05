import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Slider from "react-slick";
import ProjectImg from '../Image/ProjectImg';



const SampleCard = (props) => {

  let { img, title, info, repo } = props
  return (
    <>
      <Card style={{ 'paddingBottom': '40px', 'border': 'none' }}>
        <ProjectImg alt={title} filename={img}  />
        <Card.Body>
          <Card.Title><a href={repo} target="_blank" rel="noopener noreferrer">
          {title}
          </a></Card.Title>
          <Card.Text>
            {info}
          </Card.Text>
        </Card.Body>
      </Card>
    </>

  );
};

export default SampleCard;
