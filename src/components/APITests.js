import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Função para exibir letra por letra
const typeWriter = (text, setLog, delay) => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      setLog((prev) => prev + text[index]);
      index++;
    } else {
      clearInterval(interval);
    }
  }, delay);
};


const APITests = () => {
  const [log, setLog] = useState("Preparando os testes de API...");
  const [messages] = useState([
    "🚀 Iniciando testes de API...",
    "Detalhes: Verificando se os endpoints \n estão respondendo corretamente em múltiplas \n condições de carga e requisições simultâneas.",

    "📡 Testando latência da API...",
    "Detalhes: Medindo o tempo de resposta \n da API em diferentes cenários de \n tráfego, verificando possíveis gargalos \n de comunicação.",

    "⚠️ Erro: Tempo de resposta superior a \n 5 segundos em alta carga.",
    "Detalhes: A API está apresentando \n uma latência considerável, o que pode \n afetar o desempenho em cenários críticos \n de uso.",

    "🔧 Ajustando configurações de timeout...",
    "Detalhes: Configurações de timeout foram \n ajustadas para lidar melhor com cenários \n de alta carga e reduzir o número de \n requisições perdidas.",

    "✅ Teste de latência finalizado com sucesso.",
    "Detalhes: O tempo de resposta da API \n foi otimizado, agora respondendo \n abaixo de 2 segundos em condições \n normais.",

    "🛠️ Simulando falha na API externa...",
    "Detalhes: Simulação de falha para testar \n o comportamento da aplicação quando \n a API externa não responde. O sistema \n deve ativar fallback.",

    "⚠️ Fallback ativado: API principal fora do \n ar.",
    "Detalhes: A aplicação redirecionou \n automaticamente as requisições para \n uma API secundária, garantindo a continuidade \n do serviço.",

    "📊 Logs de comunicação acessados...",
    "Detalhes: Exibindo logs completos de \n comunicação entre a aplicação e a API, \n incluindo latência, tempo de resposta \n e códigos de status recebidos.",

    "🔄 Reexecutando teste de falha com nova \n configuração...",
    "Detalhes: Reexecutando os testes de \n falha com a nova configuração de fallback \n implementada.",

    "✅ API secundária funcionando corretamente.",
    "Detalhes: A API secundária foi acionada \n sem problemas, garantindo que o sistema \n continue funcionando mesmo com falha \n na API principal."
  ]);

useEffect(() => {
  let messageIndex = 0;

  const nextMessage = () => {
    if (messageIndex < messages.length) {
      const currentMessage = messages[messageIndex];
      setLog(""); // Limpa o log para a próxima mensagem
      typeWriter(currentMessage, setLog, 50); // Exibe letra por letra
      messageIndex++;
    }
  };

  const interval = setInterval(nextMessage, 20000); // 10 segundos de intervalo entre cada mensagem
  return () => clearInterval(interval);
}, [messages]);


  const startTest = () => {
    setLog("🚀 Iniciando testes de API...");
  };

  const simulateAPI = () => {
    setLog("🔄 Simulação de API em andamento...");
  };

  const viewLogs = () => {
    setLog("📝 Logs de teste de API acessados.");
  };

  return (
    <Container>
      <Title>API Tests</Title>
      <PromptLog>{log}</PromptLog>
      <ButtonContainer>
        <Button onClick={startTest}>Iniciar Teste de API</Button>
        <Button onClick={simulateAPI}>Simular API</Button>
        <Button onClick={viewLogs}>Ver Logs</Button>
      </ButtonContainer>
    </Container>
  );
};

export default APITests;

// Estilos semelhantes ao E2ETests.js
const Container = styled.div`
  background-color: rgba(0, 123, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
   width: 94%;
  max-width: 780px;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
font-family: "Agdasima", sans-serif;
  color: #fff;
  margin-bottom: 10px;
  font-size: 1.9em;
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
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: rgba(0, 123, 255, 0.5);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  flex-grow: 1;

  &:hover {
    background-color: rgba(0, 123, 255, 0.8);
  }
`;
