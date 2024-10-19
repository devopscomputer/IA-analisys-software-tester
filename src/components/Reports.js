import React, { useState } from 'react';
import styled from 'styled-components';

const Reports = () => {
  const [report, setReport] = useState("Gerando relatório de testes...");

  const generateFullReport = () => {
    setReport(prev => prev + "\n📊 Relatório completo gerado com sucesso.");
  };

  return (
    <Container>
      <h3>Test Reports</h3>
      <PromptLog>{report}</PromptLog>
      <ButtonContainer>
        <Button onClick={generateFullReport}>Gerar Relatório Completo</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Reports;

const Container = styled.div`
  background-color: rgba(0, 123, 255, 0.3);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;

  h3 {
  font-family: "Agdasima", sans-serif;
 font-size: 1.9em;
  color: #fff;
  }

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

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
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
