import Login from './components/Login';
import Disclaimer from './components/Disclaimer';
import Stations from './components/station/Stations';
import Detail from './components/station/detail/Detail';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import AppContainer from './components/styles/StyledAppContainer';
import { useState } from 'react';
import AlertMessage from './components/Alert';
import { AuthProvider } from './Auth';
import ProtectedRoute from './ProtectedRoute';


function App() {

  const [alert, setAlert] = useState({
    severity: "error",
    message: "wrong",
    show: false
  });

  return (
    <BrowserRouter>
    <AppContainer>
      <AuthProvider>
        <AlertMessage show={ alert.show } severity={ alert.severity } message={ alert.message } />
        <Routes>
          <Route exact path="/" element={<Login setAlert={setAlert} />} />
          <Route path="disclaimer" element={
            <ProtectedRoute>
              <Disclaimer />
            </ProtectedRoute>
          } />
          <Route path="stations" element={
            <ProtectedRoute>
            <Stations />
            </ProtectedRoute>
          } />
          <Route path="details" element={
            <ProtectedRoute>
            <Detail />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </AuthProvider>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
