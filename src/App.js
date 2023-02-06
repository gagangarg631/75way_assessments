import Login from './components/Login';
import Disclaimer from './components/Disclaimer';
import Stations from './components/Stations';
import Detail from './components/Detail';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AppContainer from './components/styles/StyledAppContainer';
import { useState } from 'react';
import AlertMessage from './components/Alert';


function App() {
  
  const [alert, setAlert] = useState({
    severity: "error",
    message: "wrong",
    show: false
  });

  return (
    <BrowserRouter>
    <AppContainer>
        <AlertMessage show={ alert.show } severity={ alert.severity } message={ alert.message } />
        <Routes>
          <Route exact path="/" element={<Login setAlert={setAlert} />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="stations" element={<Stations />} />
          <Route path="details" element={<Detail />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
