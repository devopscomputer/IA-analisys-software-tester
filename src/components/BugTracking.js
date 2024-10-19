// src/components/BugTracking.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BugTracking = () => {
  const [bugs, setBugs] = useState("Monitorando bugs...");
  const [messages, setMessages] = useState([
    "🔍 Bug identificado: Erro de login na interface de usuário.",
    "🛠️ Investigando causas do bug...",
    "⚠️ Função de validação de senha com comportamento inesperado.",
    "📝 Registrando bug no sistema de monitoramento...",
    "🔧 Tentativa de correção do bug iniciada...",
    "✅ Bug corrigido na função de validação de senha.",
    "🔄 Reexecução de testes após a correção...",
    "🟢 Todos os testes passaram com sucesso.",
    "📊 Gerando relatório detalhado do bug corrigido...",
    "📄 Relatório enviado para a equipe de QA.",
    "🕵️‍♂️ Monitorando novos bugs em outros módulos...",
    "🔍 Novo bug identificado: Erro ao salvar informações de usuário.",
    "⚙️ Investigando possível problema de banco de dados...",
    "⚠️ Conexão com o banco de dados falhou durante o teste.",
    "🛠️ Tentativa de reconexão ao banco de dados...",
    "✅ Conexão restaurada e bug resolvido.",
    "🔄 Testando novamente as funcionalidades...",
    "🟢 Sistema funcionando corretamente após a correção.",
    "📄 Relatório de bugs atualizado.",
    "🛑 Monitoramento de bugs finalizado."
  ]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setBugs(prev => prev + "\n" + messages[index]);
      index++;
      if (index >= messages.length) clearInterval(interval);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <Container>
      <h3>Bug Tracking</h3>
      <PromptLog>{bugs}</PromptLog>
    </Container>
  );
};

export default BugTracking;

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
