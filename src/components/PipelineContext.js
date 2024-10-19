import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const PipelineContext = createContext();

// Provedor do contexto
export const PipelineProvider = ({ children }) => {
  const [pipelineStatus, setPipelineStatus] = useState("idle");
  const [testResults, setTestResults] = useState([]);
  const [log, setLog] = useState("Iniciando Pipeline...");

  // Função para iniciar a pipeline
  const startPipeline = (projectId) => {
    setPipelineStatus("running");
    setLog(`Iniciando pipeline para o projeto: ${projectId}`);
    // Simular o processo de pipeline
    setTimeout(() => {
      setLog((prevLog) => prevLog + "\nPipeline em execução...");
      setTestResults((prevResults) => [...prevResults, "Resultado do Teste 1"]);
      setPipelineStatus("completed");
    }, 3000);
  };

  // Função para adicionar logs
  const addLog = (message) => {
    setLog((prevLog) => prevLog + "\n" + message);
  };

  return (
    <PipelineContext.Provider value={{ pipelineStatus, testResults, log, startPipeline, addLog }}>
      {children}
    </PipelineContext.Provider>
  );
};

// Hook para acessar o contexto
export const usePipeline = () => {
  return useContext(PipelineContext);
};