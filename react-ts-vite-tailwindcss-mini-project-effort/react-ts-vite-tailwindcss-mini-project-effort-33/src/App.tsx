import React from 'react';
import './App.css';
import { useAlertStore } from './store/useAlertStore';
import Alert from './components/Alert';

function App() {

  const { addAlert } = useAlertStore();

  return (
    <>
      <button onClick={() => addAlert('This is a success!', 'SUCCESS')}>Success</button>
      <button onClick={() => addAlert('Something went wrong.', 'ERROR')}>Error</button>
      <Alert />
    </>
  )
}

export default App
