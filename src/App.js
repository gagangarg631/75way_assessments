import Login from './components/Login';
import Disclaimer from './components/Disclaimer';
import Stations from './components/Stations';
import Detail from './components/Detail';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{
          height: '100vh',
          backgroundImage: "url('station_background.jpg')",
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
      }}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="stations" element={<Stations />} />
          <Route path="details" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
