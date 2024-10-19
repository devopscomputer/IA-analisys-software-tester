import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import E2ETests from '../components/E2ETests';
import APITests from '../components/APITests';
import SecurityTests from '../components/SecurityTests';
import PerformanceTests from '../components/PerformanceTests';
import CoverageAnalysis from '../components/CoverageAnalysis';
import BugTracking from '../components/BugTracking';
import RealTimeLogs from '../components/RealTimeLogs';
import Reports from '../components/Reports';
import RealTimePrompt from '../components/RealTimePrompt'; // Importa o Real-Time Prompt


// Componente principal
const HomeScreen = () => {
  const [testResults, setTestResults] = useState([]);

  const handleTestResult = (result) => {
    setTestResults((prevResults) => [...prevResults, result]);
    console.log("Resultado do teste recebido:", result);
  };

  return (
    <Container>
      <Background />
      <Header>
        <Logo src="/images/logo.png" alt="QA Automation Hub Logo" />
        <h1>Software Tester Analysis</h1>
        <p>Automatize e monitore seus testes com IA, análise de desempenho, e feedback em tempo real.</p>
      </Header>

      {/* Primeira Sessão: Real-Time Prompt */}
      <Section>
        <TitleSection>Real-Time Code Analysis</TitleSection>
        <GlassCardPrompt> {/* Card para o Real-Time Prompt */}
          <RealTimePrompt onTestResult={handleTestResult} />
        </GlassCardPrompt>
      </Section>

      {/* Primeira Sessão: Sessão de Testes */}
      <Section>
        <TitleSection>Test Automation Status</TitleSection>
        <CardWrapper>
          <GlassCard>
            <E2ETests testResults={testResults} />
          </GlassCard>
          <GlassCard>
            <APITests testResults={testResults} />
          </GlassCard>
        </CardWrapper>
      </Section>

      {/* Segunda Sessão: Sessão de Análise */}
      <Section>
        <TitleSection>Real-Time Analysis</TitleSection>
        <CardWrapper>
          <GlassCard>
            <PerformanceTests />
          </GlassCard>
          <GlassCard>
            <CoverageAnalysis />
          </GlassCard>
        </CardWrapper>
      </Section>

      {/* Terceira Sessão: Sessão de Relatórios */}
      <Section>
        <TitleSection>Test Reports</TitleSection>
        <CardWrapper>
          <GlassCard>
            <RealTimeLogs />
          </GlassCard>
          <GlassCard>
            <Reports />
          </GlassCard>
        </CardWrapper>
      </Section>

      {/* Sessão Security */}
      <Section>
        <TitleSection>Security</TitleSection>
        <CardWrapper>
          <GlassCard>
            <BugTracking />
          </GlassCard>
          <GlassCard>
            <SecurityTests />
          </GlassCard>
        </CardWrapper>
      </Section>

      {/* Botão de Ação */}
    </Container>
  );
};

// Styled-components para estilização
const Container = styled.div`
  display: flex;
  flex-direction: row; /* Organização horizontal */
  align-items: flex-start;
  background-color: #121212;
  padding: 20px;
  gap: 400px;
  min-height: 100vh;
  z-index: 9999;


   h1 {
    font-family: "Agdasima", sans-serif;
    font-size: 48px;
    margin-bottom: 10px;
    letter-spacing: 3px; /* ajusta o valor de acordo com o espaçamento desejado */
    position: relative;
    left: 49vh;
    bottom: 35vh;
  }

  p {
  font-family: "Agdasima", sans-serif;
    position: relative;
    left: 62vh;
    z-index: 9999;
    bottom: 37.6vh;
    font-size: 44px;
    color: #fff;
  } 
  overflow-x: scroll; /* Habilita rolagem horizontal */
  white-space: nowrap; /* Impede quebra de linha para scroll lateral */

  ::-webkit-scrollbar {
  width: 12px; /* Largura da barra */
}

::-webkit-scrollbar-track {
  background: rgba(40, 44, 52, 0.2); /* Fundo transparente com opacidade */
  border-radius: 10px; /* Suaviza as bordas */
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 191, 255, 0.8); /* Cor azul clara, combinando com o card */
  border-radius: 10px; /* Deixa a barra arredondada */
  border: 2px solid rgba(40, 44, 52, 0.5); /* Borda com opacidade para contraste */
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 191, 255, 1); /* Torna o scroll mais visível ao passar o mouse */
  border-color: rgba(40, 44, 52, 0.7); /* Aumenta o contraste da borda ao passar o mouse */
}

::-webkit-scrollbar-corner {
  background-color: transparent; /* Remove o fundo no canto do scroll */
}
`;

const Header = styled.header`
  text-align: center;
  color: #fff;
  margin-bottom: 40px;
  z-index: 9999;
  width: 100%; /* Garante que o header ocupe toda a largura */

`;

const Section = styled.div`
margin-left: -200px;
  display: inline-block; /* Mantém as seções em linha */
  margin-right: 600px; /* Espaço lateral entre os cards */
  margin-bottom: 100px; /* Aumentar o espaçamento entre as seções */
  margin-top: 80px; /* Adiciona espaçamento antes da seção */vertical-align: top;
  position: relative;
  top: 33vh;
  right: 99vh;
  z-index: 9999;
  
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/bg2.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.6; /* Opacidade para não sobrecarregar o conteúdo */
  z-index: 1;
`;

const Logo = styled.img`
position: relative;
  left: 52vh;
  height: auto;
  margin-bottom: 20px;
`;

const TitleSection = styled.h2`
  font-family: "Agdasima", sans-serif;
  color: #fff;
  font-size: 36px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.1);
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  width: 100%;
  max-width: 100px;
  flex-wrap: wrap;
  
  & > * {
    flex: 1; /* Garante que todos os cards tenham a mesma largura */
    min-width: 800px;
    max-width: 12%;
  }
`;

const GlassCard = styled.div`
  background-color: rgba(0, 123, 255, 0.6);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.2s, box-shadow 0.2s;
  height: 370px; /* Definir uma altura fixa */
  display: flex;
  flex-direction: column; /* Garante que o conteúdo seja organizado verticalmente */
  justify-content: space-between; /* Espaço entre o conteúdo */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.7), 0 8px 160px rgba(0, 0, 0, 0.5);
  }
`;

/* Card maior para o Real-Time Prompt */
const GlassCardPrompt = styled(GlassCard)`
  height: 600px; /* Definir uma altura maior para o Real-Time Prompt */
 
`;



export default HomeScreen;
