// src/components/SecurityTests.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SecurityTests = () => {
  const [log, setLog] = useState("Preparando os testes de segurança...");
  const [messages, setMessages] = useState([
    "🔐 Teste de segurança iniciado...",
    "🕵️‍♂️ Verificando portas abertas e serviços expostos...",
    "⚙️ Iniciando varredura de vulnerabilidades com OWASP ZAP...",
    "🚨 Vulnerabilidade crítica encontrada: SQL Injection detectado!",
    "📡 Tentando explorar a vulnerabilidade com Metasploit...",
    "⚠️ Exploit falhou, tentando nova abordagem...",
    "✅ Vulnerabilidade explorada com sucesso, acesso de administrador obtido.",
    "🛡️ Tentando elevação de privilégios...",
    "🔓 Acesso total ao sistema adquirido!",
    "🔍 Verificando integridade de arquivos sensíveis...",
    "⚠️ Arquivos corrompidos encontrados...",
    "⚙️ Tentando restaurar backups...",
    "🟢 Backups restaurados com sucesso.",
    "🛡️ Finalizando varredura de segurança...",
    "📊 Gerando relatório de vulnerabilidades encontradas...",
    "🔴 Sistema em risco. Ações corretivas recomendadas.",
    "✅ Corrigindo vulnerabilidades automaticamente...",
    "🔒 Sistema seguro após correção de falhas.",
    "📊 Relatório final de segurança gerado com sucesso.",
    "🛑 Testes de segurança concluídos."
  ]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLog(prevLog => prevLog + "\n" + messages[index]);
      index++;
      if (index >= messages.length) clearInterval(interval);
    }, 2000); // Mensagens a cada 2 segundos

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <Container>
      <Title>Security Tests</Title>
      <PromptLog>{log}</PromptLog>
    </Container>
  );
};

export default SecurityTests;

// Estilos similares ao E2ETests.js
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

const Title = styled.h3`
font-family: "Agdasima", sans-serif;
font-size: 1.9em;
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
