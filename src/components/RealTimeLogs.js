// src/components/RealTimeLogs.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RealTimeLogs = () => {
  const [logs, setLogs] = useState("Monitorando logs em tempo real...");
  const [messages, setMessages] = useState([
    "📡 Conectando aos servidores de log...",
    "🔍 Verificando logs de acesso...",
    "⚠️ Tentativa de login inválido detectada...",
    "🔐 Sistema bloqueando IP suspeito...",
    "🕵️‍♂️ Investigando tentativas de ataque de força bruta...",
    "🛡️ Firewall acionado para bloqueio de portas específicas...",
    "📊 Logs de segurança atualizados...",
    "✅ Todos os acessos verificados com sucesso.",
    "📡 Monitorando comportamento de rede em tempo real...",
    "⚠️ Tráfego anormal identificado em porta 443...",
    "🔓 Iniciando bloqueio temporário para investigação...",
    "🔒 Conexões SSL verificadas com sucesso...",
    "🔧 Realizando manutenção de logs antigos...",
    "📦 Backup automático de logs realizado.",
    "🛡️ Logs de eventos críticos arquivados.",
    "🛑 Logs mais antigos removidos para liberar espaço.",
    "📡 Continuando a monitorar os logs em tempo real.",
    "⚠️ Anomalia de rede detectada, investigação iniciada...",
    "🛡️ Finalizando monitoramento de logs de segurança.",
    "✅ Log de segurança completo e atualizado."
  ]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLogs(prev => prev + "\n" + messages[index]);
      index++;
      if (index >= messages.length) clearInterval(interval);
    }, 2500);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <Container>
      <Title>Real-Time Logs</Title>
      <PromptLog>{logs}</PromptLog>
    </Container>
  );
};

export default RealTimeLogs;

// Estilos similares aos anteriores
const Container = styled.div`
  background-color: rgba(0, 123, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
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