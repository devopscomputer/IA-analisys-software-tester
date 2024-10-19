// src/components/IAInsights.js
import React, { useState } from 'react';
import styled from 'styled-components';

const IAInsights = () => {
  const [insight, setInsight] = useState("Analisando dados com IA...");

  const runAIAnalysis = () => {
    setInsight(prev => prev + "\n🤖 IA identificou possíveis falhas futuras...");
  };

  return (
    <Container>
      <Title>IA Insights</Title>
      <PromptLog>{insight}</PromptLog>
      <Button onClick={runAIAnalysis}>Executar Análise de IA</Button>
    </Container>
  );
};

export default IAInsights;

// Estilos similares aos anteriores
const Container = styled.div`
  background-color: rgba(0, 123, 255, 0.3);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
`;

const Title = styled.h3`
font-family: "Agdasima", sans-serif;
  color: #fff;
`;

const PromptLog = styled.pre`
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 10px;
  border-radius: 5px;
  height: 150px;
  overflow-y: auto;
  white-space: pre-wrap;
  margin-bottom: 10px;
  font-family: 'Courier New', Courier, monospace;
`;
const Button = styled.button`
  background-color: rgba(0, 123, 255, 0.5);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 123, 255, 0.8);
  }
`;
