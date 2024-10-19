import React, { useState } from 'react';
import styled from 'styled-components';
import JSZip from 'jszip';
import axios from 'axios';
import * as tf from '@tensorflow/tfjs'; // TensorFlow.js para integrar IA e ML

// Função para compactar os arquivos em um .zip
const zipFiles = async (files) => {
  const zip = new JSZip();
  
  // Verificação e inclusão de arquivos com diferentes tipos no zip
  Array.from(files).forEach(file => {
    try {
      // Verifica o caminho do arquivo relativo e o inclui no zip
      zip.file(file.webkitRelativePath, file);
    } catch (error) {
      console.error(`Erro ao adicionar arquivo ao zip: ${file.name}`, error);
    }
  });

  // Gera o conteúdo zipado
  try {
    const zippedContent = await zip.generateAsync({ type: 'blob' });
    return zippedContent;
  } catch (error) {
    console.error("Erro ao gerar o conteúdo do zip:", error);
    throw new Error('Erro ao gerar o arquivo compactado.');
  }
};

const RealTimePrompt = ({ onTestResult }) => {
  const [log, setLog] = useState("Esperando upload do projeto...");
  const [projectUploaded, setProjectUploaded] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [ciCdStarted, setCiCdStarted] = useState(false);
  const [model, setModel] = useState(null); // Estado para o modelo de IA

  // Carregar modelo de IA ao montar o componente
  React.useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadLayersModel('/models/model.json');
        setModel(loadedModel);
        setLog("Modelo de IA carregado com sucesso.");
      } catch (error) {
        setLog("Erro ao carregar o modelo de IA.");
        console.error(error);
      }
    };
    loadModel();
  }, []);

  // Função para o botão de upload do projeto
  const handleProjectUpload = async (event) => {
    const files = Array.from(event.target.files);

    if (files.length) {
      setLog("Compactando arquivos para upload...");
      try {
        // Compacta os arquivos usando JSZip
        const zipBlob = await zipFiles(files);

        // Exibe a mensagem de sucesso após a compactação
        setLog("Projeto compactado. Iniciando upload...");

        // Envia o projeto compactado para o servidor (API)
        await uploadProject(zipBlob);
      } catch (error) {
        setLog('Erro ao compactar o projeto. Verifique os arquivos e tente novamente.');
        console.error(error);
      }
    }
  };

  // Função para enviar o projeto para a API
  const uploadProject = async (zipBlob) => {
    try {
      const formData = new FormData();
      formData.append('file', zipBlob, 'project.zip');

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setLog(`Upload em progresso: ${percentCompleted}%`);
        },
      });

      setLog('Upload concluído com sucesso. Iniciando pipeline CI/CD...');
      setProjectUploaded(true);

      // Inicia o pipeline CI/CD automaticamente após o upload
      triggerCiCdPipeline(response.data.projectId);
    } catch (error) {
      setLog('Erro no upload do projeto.');
      console.error(error);
    }
  };

  // Função para acionar o pipeline CI/CD
  const triggerCiCdPipeline = async (projectId) => {
    setCiCdStarted(true);
    setLog("Pipeline CI/CD acionado. Executando testes automáticos...");

    try {
      const response = await axios.get(`/api/cicd/start/${projectId}`);
      if (response.data.success) {
        setLog("Pipeline CI/CD concluído com sucesso! Iniciando testes automatizados...");
        runAutomatedTests(projectId);
      } else {
        setLog("Erro ao iniciar o pipeline CI/CD.");
      }
    } catch (error) {
      setLog("Erro ao acionar o pipeline CI/CD.");
      console.error(error);
    }
  };

  // Função para rodar testes automatizados como Jest, Cypress, npm audit
  const runAutomatedTests = async (projectId) => {
    setLog("Executando testes unitários e integração (Jest e Cypress)...");

    try {
      const response = await axios.get(`/api/test/run/${projectId}`);
      if (response.data.success) {
        response.data.results.forEach((result, index) => {
          setTimeout(() => {
            setLog((prevLog) => prevLog + `\nTeste ${index + 1}: ${result}`);
            onTestResult(result); // Envia os resultados para outros prompts
          }, index * 200);
        });
        runSecurityCheck(projectId); // Após testes unitários, verificar vulnerabilidades de segurança
      } else {
        setLog("Erro ao executar os testes automatizados.");
      }
    } catch (error) {
      setLog("Erro durante a execução dos testes.");
      console.error(error);
    }
  };

  // Função para verificar vulnerabilidades com npm audit
  const runSecurityCheck = async (projectId) => {
    setLog("Executando verificações de segurança (npm audit)...");

    try {
      const response = await axios.get(`/api/security/check/${projectId}`);
      if (response.data.success) {
        setLog("Verificação de segurança concluída. Resultados:");
        response.data.issues.forEach((issue, index) => {
          setTimeout(() => {
            setLog((prevLog) => prevLog + `\nVulnerabilidade ${index + 1}: ${issue}`);
            onTestResult(issue); // Envia os resultados para outros prompts
          }, index * 200);
        });
        runIAAnalysis(projectId); // Inicia a análise com IA após a verificação de segurança
      } else {
        setLog("Erro ao executar verificações de segurança.");
      }
    } catch (error) {
      setLog("Erro durante a verificação de segurança.");
      console.error(error);
    }
  };

  // Função para rodar análise de IA para detectar falhas
  const runIAAnalysis = async (projectId) => {
    setLog("Iniciando análise de IA...");

    try {
      const response = await axios.get(`/api/analyze/${projectId}`);
      const fileContent = response.data.analysisResult.split('\n');

      fileContent.forEach(async (line, index) => {
        const prediction = await predictFailure(line); // Função de predição de falhas
        setTimeout(() => {
          setLog((prevLog) => prevLog + `\nLinha ${index + 1}: ${line} - Predição: ${prediction}`);
        }, index * 100); // Simula a análise de cada linha com um delay de 100ms
      });
    } catch (error) {
      setLog('Erro ao executar a análise de IA.');
      console.error(error);
    }
  };

  // Função para usar o modelo de IA para prever falhas
  const predictFailure = async (line) => {
    if (!model) return "Modelo não carregado";
    const input = tf.tensor([line.split('').map(char => char.charCodeAt(0))]); // Transformar a linha em tensor numérico
    const prediction = model.predict(input);
    const result = prediction.dataSync()[0];
    return result > 0.5 ? "Falha Prevista" : "Sem Falha";
  };

  return (
    <Container>
      <h3>Real-Time Code Analysis with CI/CD and AI</h3>
      <PromptLog>{log}</PromptLog>

      {!isAnalyzing ? (
        <>
          <UploadButton>
            <label htmlFor="projectUpload">📂 Upload Project</label>
            <input
              id="projectUpload"
              type="file"
              multiple
              onChange={handleProjectUpload}
              webkitdirectory="" // Permite selecionar uma pasta inteira
              style={{ display: 'none' }}
            />
          </UploadButton>
        </>
      ) : (
        <p>Analisando o código...</p>
      )}

      {projectUploaded && !ciCdStarted && (
        <StartButton onClick={triggerCiCdPipeline}>
          Start CI/CD Pipeline
        </StartButton>
      )}
    </Container>
  );
};

export default RealTimePrompt;

// Estilos
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
  height: 300px;
  overflow-y: auto;
  white-space: pre-wrap;
  margin-bottom: 10px;
  font-family: 'Courier New', Courier, monospace;
`;

const UploadButton = styled.div`
  background-color: rgba(0, 123, 255, 0.3);
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  color: white;
  font-size: 18px;

  label {
    cursor: pointer;
  }

  &:hover {
    background-color: rgba(0, 123, 255, 0.6);
  }
`;

const StartButton = styled.button`
  background-color: rgba(0, 191, 255, 0.5);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  font-size: 18px;
  margin-top: 10px;

  &:hover {
    background-color: rgba(0, 191, 255, 0.7);
  }
`;
