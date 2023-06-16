import './App.css';

import { Route, Routes } from 'react-router-dom'

// Routes
import Navigation from './routes/navigation/navigation.route';
import MultipleServers from './routes/multiple-servers/multiple-servers.route';

function App() {
  return (
    <Routes>
      <Route path='/lineas-de-espera' element={<Navigation />}>
        <Route index element={<MultipleServers />} />
        <Route path='varios-servidores' element={<MultipleServers />} />
      </Route>
    </Routes>
  );
}

export default App;
