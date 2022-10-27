import React from 'react';
import { StepProvider } from './context/StepsContext';
import { Router } from './router';
function App() {
  return (
    <StepProvider>
      <Router />
    </StepProvider>
  );
}

export default App;
