import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import 'chartjs-plugin-zoom';

// Registrar elementos e plugins do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const GraphPanel = ({ title }) => {
  // Estado para controlar o intervalo de tempo
  const [timeRange, setTimeRange] = useState('7d');

  // Dados de exemplo com múltiplos conjuntos de dados para comparação
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'CPU Usage',
        data: [45, 60, 50, 70, 85, 75, 65],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4, // Curva suave
      },
      {
        label: 'Memory Usage',
        data: [30, 45, 55, 40, 60, 80, 70],
        fill: true,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.4, // Curva suave
      },
    ],
  };

  // Opções avançadas para análise gráfica
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            return `${label}: ${context.raw}%`;  // Tooltip personalizado com porcentagem
          },
        },
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy',
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'xy',
        },
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Day of the Week',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Usage (%)',
        },
      },
    },
  };

  // Função para alterar intervalo de tempo (exemplo básico)
  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
    console.log(`Time range changed to: ${range}`);
    // Aqui você pode adicionar lógica para filtrar os dados com base no intervalo de tempo
  };

  return (
    <PanelContainer>
      <TimeRangeSelector>
        <button onClick={() => handleTimeRangeChange('24h')}>Últimas 24h</button>
        <button onClick={() => handleTimeRangeChange('7d')}>Últimos 7 dias</button>
        <button onClick={() => handleTimeRangeChange('30d')}>Últimos 30 dias</button>
      </TimeRangeSelector>

      <Line data={data} options={options} />

      {/* Linha de tendência fictícia */}
      <TrendLine>Analyzing trends for the past {timeRange}</TrendLine>
    </PanelContainer>
  );
};

export default GraphPanel;

// Estilos personalizados
const PanelContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 700px;
  margin-bottom: 20px;
`;

const TimeRangeSelector = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 10px;

  button {
    background-color: rgba(0, 123, 255, 0.5);
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 123, 255, 0.8);
    }
  }
`;

const TrendLine = styled.p`
  margin-top: 10px;
  color: #bbb;
  text-align: center;
`;

