import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import InfoCard from '../prototypes/InfoCard';
import logo from '../../logo.svg';


export default function Projects() {
    return (
        <Container fluid className="landing-container" style={{ backgroundColor: "#374f2f" }}>
        <div style={{alignContent: 'center', marginBottom: '6%'}}>
          <Row style={{marginTop: '5%', paddingLeft: '15%', paddingRight: '15%'}}>
            <h1>Projects</h1>
          </Row>
          <Row style={{marginTop: '5%', paddingLeft: '15%', paddingRight: '15%'}}>
            <InfoCard link="/projects" title="Project 1" description="Description of Project 1" icon={logo}/>


          </Row>
      </div>
        </Container>

    );
}