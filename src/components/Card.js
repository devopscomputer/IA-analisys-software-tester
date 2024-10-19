import React from 'react';
import styled from 'styled-components';

const Card = ({ title, description, children }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {children} {/* Renderiza o conteúdo adicional dentro do Card */}
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

const Title = styled.h3`
font-family: "Agdasima", sans-serif;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  `;
