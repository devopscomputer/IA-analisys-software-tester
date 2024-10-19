import React, { useState } from 'react';
import styled from 'styled-components';

const PerformanceTests = () => {
  const [log, setLog] = useState("Iniciando testes de performance...");

  const startTest = () => {
    setLog(prevLog => prevLog + "\n🟢 Testes de performance em execução...");
  };

  const generateReport = () => {
    setLog(prevLog => prevLog + "\n📊 Relatório de desempenho gerado com sucesso.");
  };

  return (
    <Container>
      <h3>Performance Tests</h3>
      <PromptLog>{log}</PromptLog>
      <ButtonContainer>
        <Button onClick={startTest}>Iniciar Teste</Button>
        <Button onClick={generateReport}>Gerar Relatório</Button>
      </ButtonContainer>
    </Container>
  );
};

export default PerformanceTests;

const Container = styled.div`
  background-color: rgba(0, 123, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;

  h3 {
  font-family: "Agdasima", sans-serif;
  font-size: 30px;
  color: white;
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
  gap: 5px;
`;

const Button = styled.button`
  background-color: rgba(0, 123, 255, 0.2);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 123, 255, 0.8);
  }
`;
