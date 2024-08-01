import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import logo from '../../logo.svg';

export default function InfoCard({ link, title, description, icon }) {
  console.log("Icon file path:", icon);  // Add this line to log the icon path
  console.log("Logo:", logo)

  return (
    <Col className="text-center" md={4}>
      <a href={link} style={{ textDecoration: 'none', marginBottom: '2rem' }}>
        <Card className="Card">
          <Card.Body>
            <Card.Title className="Card-title-lp">{title}</Card.Title>
            <Card.Text className="Card-text-lp">
              {description}
            </Card.Text>
          </Card.Body>
          {icon && (
            <Card.Img 
              variant="bottom" 
              src={icon} 
              style={{ width: '50%', height: 'auto', padding: '5%', margin: 'auto' }} 
            />
          )}
        </Card>
      </a>
    </Col>
  );
}