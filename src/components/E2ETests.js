import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Função para gerar a exibição letra por letra
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

const E2ETests = () => {
  const [log, setLog] = useState("Iniciando os testes E2E para a aplicação...");
  const [messages] = useState([
    "🌐 Testando carregamento da página principal...",
    "Detalhes: Verificando se a página principal carrega com todos os elementos essenciais, como cabeçalhos\nbotões e links funcionais. O sistema está utilizando machine learning para identificar padrões de comportamento\nanormais no carregamento de componentes.",
    
    "⏳ Verificando tempo de resposta do servidor...",
    "Detalhes: Analisando o tempo de resposta em diferentes cenários de carga. O sistema detectou uma latência maior que o normal durante picos de tráfego. IA sugere ajuste no balanceamento de carga.",

    "⚠️ Erro encontrado: Atraso no tempo de resposta superior a 5 segundos.",
    "Detalhes: O servidor não conseguiu lidar com um volume elevado de requisições simultâneas. Foi sugerida a adição de instâncias de servidores para melhorar a escalabilidade.",

    "🔧 Aplicando ajustes no balanceamento de carga automaticamente via IA...",
    "Detalhes: O sistema de automação distribuiu melhor as requisições, duplicando as instâncias de servidores e ajustando o balanceador de carga. Reexecutando teste.",

    "✅ Carregamento bem-sucedido em menos de 2 segundos após ajuste.",
    "Detalhes: A latência foi reduzida significativamente, e o carregamento da página principal agora está abaixo do limite de 2 segundos.",

    "📱 Testando compatibilidade em dispositivos móveis...",
    "Detalhes: Usando machine learning para simular interações \n em dispositivos móveis. IA detecta problemas de interface, \n sugerindo ajustes no design responsivo.",

    "⚠️ Problema encontrado: Elementos fora de lugar em telas \n menores que 5 polegadas.",
    "Detalhes: A interface não está se ajustando corretamente \n em resoluções muito pequenas. Recomendada a alteração \n das configurações de CSS responsivo.",

    "🔧 Ajustando CSS automaticamente para suportar telas pequenas...",
    "Detalhes: A IA alterou as configurações de CSS e verificou \n a disposição dos elementos. Reexecutando teste para verificar \n a correção.",
    
    "✅ Layout responsivo funcionando corretamente após correções.",
    "Detalhes: A interface foi ajustada e agora está completamente \n funcional em dispositivos móveis com telas menores que \n 5 polegadas.",

    "💾 Validando funcionalidade de login...",
    "Detalhes: Usando IA para analisar o comportamento de \n usuários durante o login. IA detectou tentativas de login \n não autorizadas (possível ataque de força bruta).",
    
    "⚠️ Alerta de segurança: Tentativas de força bruta detectadas \n no login.",
    "Detalhes: Foram identificadas várias tentativas falhadas \n de login em um curto período de tempo. IA sugere aplicar \n bloqueio temporário de IP para prevenir ataques.",
    
    "🔧 Aplicando medidas de segurança: Bloqueio temporário de IP \n para tentativas não autorizadas.",
    "Detalhes: A automação bloqueou o IP após detectar mais \n de 10 tentativas falhadas em 30 segundos. Monitoramento \n contínuo ativado.",

    "✅ Login funcional e seguro após aplicação de medidas de segurança.",
    "Detalhes: As medidas de segurança foram aplicadas com sucesso. \n O login agora está funcionando normalmente sem novas \n tentativas de ataque.",

    "📡 Testando comunicação com API de terceiros...",
    "Detalhes: Analisando latência e tempo de resposta das APIs \n externas. Ferramentas de automação detectaram que a API \n de terceiros está com alta latência, comprometendo o \n desempenho da aplicação.",

    "⚠️ Timeout detectado na comunicação com API.",
    "Detalhes: A comunicação com a API externa está levando mais \n de 10 segundos, o que causou um timeout. O sistema sugere \n um fallback para outras APIs disponíveis.",

    "🔧 Ajustando fallback de API automaticamente...",
    "Detalhes: A automação implementou um fallback para uma API \n secundária, redirecionando as requisições para melhorar a \n resposta do sistema. Reexecutando o teste com as novas \n configurações.",

    "✅ API respondendo corretamente após fallback.",
    "Detalhes: A API secundária respondeu em 3 segundos, \n melhorando significativamente o tempo de resposta geral \n do sistema. A falha foi mitigada.",

    "🧪 Executando testes de usabilidade no formulário de cadastro...",
    "Detalhes: Verificando se os campos estão claros e seguem \n boas práticas de usabilidade. Machine learning analisa \n os comportamentos dos usuários e detecta problemas \n de fluxo.",
    
    "⚠️ Problema encontrado: O campo de data de nascimento não \n está aceitando entradas internacionais.",
    "Detalhes: O formato de data no formulário não está aceitando \n datas fora do padrão americano (MM/DD/YYYY). Sugerida \n correção para aceitar formatos internacionais.",
    
    "🔧 Ajustando validação de data no formulário para aceitação global...",
    "Detalhes: A validação do campo de data foi ajustada para aceitar \n diferentes formatos de data, incluindo DD/MM/YYYY. \n Reexecutando teste.",

    "✅ Validação do formulário funcionando corretamente após ajustes.",
    "Detalhes: Agora o campo de data aceita entradas em \n múltiplos formatos, sem problemas de validação. Teste \n concluído com sucesso."
  ]);
  useEffect(() => {
    let messageIndex = 0;
  
    const nextMessage = () => {
      if (messageIndex < messages.length) {
        const currentMessage = messages[messageIndex];
        
        // Limpa o log para a próxima mensagem e começa a exibir letra por letra
        setLog(""); 
        
        // Exibição letra por letra para cada mensagem
        typeWriter(currentMessage, setLog, 50); 
        
        messageIndex++; 
      }
    };
  
    const interval = setInterval(nextMessage, 10000); // Exibe cada mensagem após 10 segundos
    return () => clearInterval(interval);
  }, [messages]);

  const startTest = () => {
    setLog("🟢 Testes E2E em execução...");
  };

  const pauseTest = () => {
    setLog((prevLog) => prevLog + "\n⏸ Testes E2E pausados...");
  };

  const generateReport = () => {
    // Simulação de geração de relatório em Python
    const reportContent = `
      Relatório de Testes E2E
      =======================
      - Status: Concluído
      - Erros Críticos: 1
      - Sugestões de Melhorias: 3
      - Tempo Médio de Resposta: 2s
      - Testes de Segurança: Passaram com sucesso
      - Testes de Compatibilidade: Ajustados e finalizados

      Análise Final:
      --------------
      O sistema teve uma latência detectada, que foi corrigida automaticamente. As APIs responderam bem após o ajuste no fallback, e a interface foi ajustada para melhorar a responsividade.
    `;

    // Mostra o relatório no painel
    setLog(reportContent);
  };

  return (
    <Container>
      <Title>E2E Tests</Title>
      <PromptLog>{log}</PromptLog>
      <ButtonContainer>
        <Button onClick={startTest}>Iniciar Teste</Button>
        <Button onClick={pauseTest}>Pausar Teste</Button>
        <Button onClick={generateReport}>Gerar Relatório</Button>
      </ButtonContainer>
    </Container>
  );
};

export default E2ETests;

// Styled-components para estilização
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
  color: #fff;
  font-family: "Agdasima", sans-serif;
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
