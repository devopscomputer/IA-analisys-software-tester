// src/components/CoverageAnalysis.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CoverageAnalysis = () => {
  const [coverage, setCoverage] = useState("Calculando cobertura de testes...");
  const [messages, setMessages] = useState([
    "🟢 Iniciando análise de cobertura de testes...",
    "🔍 Verificando cobertura de testes unitários...",
    "📊 Testes unitários cobrem 75% do código.",
    "🔍 Verificando cobertura de testes de integração...",
    "📊 Testes de integração cobrem 60% do sistema.",
    "⚙️ Executando testes de regressão...",
    "📊 Cobertura dos testes de regressão: 85%.",
    "🛠️ Executando testes de performance...",
    "📊 Cobertura dos testes de performance: 70%.",
    "🟢 Concluída análise de cobertura de testes funcionais.",
    "🟡 Cobertura geral do sistema: 78%.",
    "📊 Gerando relatório final de cobertura...",
    "📄 Relatório de cobertura pronto e salvo.",
    "🔍 Iniciando análise de cobertura de segurança...",
    "🛡️ Verificando testes de segurança executados...",
    "📊 Cobertura dos testes de segurança: 90%.",
    "⚙️ Executando análise final...",
    "✅ Relatório completo de cobertura gerado.",
    "📄 Relatório enviado para equipe de QA.",
    "🛑 Análise de cobertura de testes finalizada."
  ]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCoverage(prev => prev + "\n" + messages[index]);
      index++;
      if (index >= messages.length) clearInterval(interval);
    }, 2500);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <Container>
      <h3>Coverage Analysis</h3>
      <PromptLog>{coverage}</PromptLog>
    </Container>
  );
};

export default CoverageAnalysis;

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
