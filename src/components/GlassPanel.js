// src/components/Card.js
import React from 'react';
import styled from 'styled-components';

const Card = ({ title, message }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardMessage>{message}</CardMessage>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  background: rgba(0, 140, 255, 0.2);
  border-radius: 10px;
  padding: 1.5rem;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const CardTitle = styled.h2`
  color: white;
  margin-bottom: 1rem;
`;

const CardMessage = styled.p`
  color: white;
  font-size: 1rem;
  opacity: 0.8;
`;
