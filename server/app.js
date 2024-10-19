const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { spawn } = require('child_process');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de upload usando multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // Simulando salvamento de arquivo e atribuição de projectId
  const projectId = '12345'; // Simulação do ID do projeto para testes
  console.log('Arquivo recebido:', req.file.originalname);

  // Aqui você pode salvar o arquivo ou iniciar o pipeline
  res.json({ success: true, projectId });
});

// Rota de teste de CI/CD
app.get('/api/cicd/start/:projectId', (req, res) => {
  const projectId = req.params.projectId;
  console.log(`Iniciando pipeline de CI/CD para o projeto: ${projectId}`);

  // Simulação de pipeline de CI/CD
  res.json({ success: true, message: `Pipeline de CI/CD iniciado para o projeto ${projectId}` });
});

// Rota para análise de IA
app.get('/api/analyze/:projectId', (req, res) => {
  const projectId = req.params.projectId;
  console.log(`Iniciando análise de IA para o projeto: ${projectId}`);

  // Simulação de resultado de análise
  const analysisResult = `
    Análise completa do código do projeto ${projectId}:
    - Complexidade de código: Alta
    - Cobertura de testes: 85%
    - Defeitos encontrados: 3
    - Falha prevista: Não
  `;
  res.json({ success: true, analysisResult });
});

// Rota para executar o modelo de IA
app.get('/run-software-test-model', (req, res) => {
  console.log('Executando o modelo de teste de software com IA...');

  // Executa o script Python
  const python = spawn('python', ['./ml_models/software_test_model.py']);

  let modelOutput = '';

  python.stdout.on('data', (data) => {
    modelOutput += data.toString(); // Captura a saída do modelo
  });

  python.stderr.on('data', (data) => {
    console.error(`Erro no modelo: ${data}`);
    res.status(500).json({ success: false, error: 'Erro ao executar o modelo de IA.' });
  });

  python.on('close', (code) => {
    console.log(`Processo do modelo de IA finalizado com código ${code}`);
    res.json({ success: true, output: modelOutput }); // Retorna a saída do modelo
  });
});

// Iniciar servidor
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Exporta o servidor para testes
module.exports = server;
