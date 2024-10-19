import React from 'react';
import HomeScreen from './screens/HomeScreen'; // Certifique-se de que HomeScreen está no caminho correto
import { PipelineProvider } from './components/PipelineContext'; // Importa o PipelineProvider

function App() {
  return (
    <div className="App">
      {/* Envolvendo a HomeScreen com o PipelineProvider */}
      <PipelineProvider>
        <HomeScreen />
      </PipelineProvider>
    </div>
  );
}

export default App;
