import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Alert } from '@mui/material';
import Home from './pages/Home';
import Add from './pages/Add';
import Edit from './pages/Edit';

function App() {
  const [alertMsg, setAlertMsg] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        handleAlert('', false, '');
      }, 1500);
    }
  }, [showAlert]);

  const handleAlert = (message, isShow, type) => {
    setAlertMsg(message);
    setShowAlert(isShow);
    setAlertType(type);
  };

  return (
    <div className="App">
      <div>
        <Alert
          severity={alertType}
          sx={{
            position: 'fixed',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
          }}
        >
          {alertMsg}
        </Alert>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home handleAlert={handleAlert} />}></Route>
          <Route
            path="/add"
            element={<Add handleAlert={handleAlert} />}
          ></Route>
          <Route
            path="/edit/:id"
            id
            element={<Edit handleAlert={handleAlert} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
