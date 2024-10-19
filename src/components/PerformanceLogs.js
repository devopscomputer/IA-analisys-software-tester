// PerformanceLogs.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PerformanceLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating log fetching from API
    setTimeout(() => {
      setLogs([
        'CPU Usage: 45%',
        'Memory Usage: 2.1GB',
        'Network Latency: 50ms',
        'Disk Read/Write Speed: 120MB/s',
        'Load Time: 0.9s',
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingMessage>Loading performance logs...</LoadingMessage>;
  }

  return (
    <Container>
      <h2>Performance Logs</h2>
      <LogsContainer>
        {logs.map((log, index) => (
          <Log key={index}>{log}</Log>
        ))}
      </LogsContainer>
      <UploadButton>Upload New Logs</UploadButton>
      <DownloadButton>Download Report</DownloadButton>
    </Container>
  );
};

export default PerformanceLogs;

// Styled-components
const Container = styled.div`
  padding: 20px;
  background-color: #20232a;
  color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const LogsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Log = styled.p`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 4px;
`;

const LoadingMessage = styled.div`
  color: #61dafb;
`;

const UploadButton = styled.button`
  background-color: #61dafb;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const DownloadButton = styled.button`
  background-color: #21a0f6;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;
