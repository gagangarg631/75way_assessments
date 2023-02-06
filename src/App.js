import Login from './components/Login';
import Disclaimer from './components/Disclaimer';
import Stations from './components/Stations';
import Detail from './components/Detail';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AppContainer from './components/styles/StyledAppContainer';

function App() {
  return (
    <BrowserRouter>
    <AppContainer>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="stations" element={<Stations />} />
          <Route path="details" element={<Detail />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
