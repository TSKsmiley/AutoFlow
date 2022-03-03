import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import MainPanel from './MainPanel';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="login" element={<Login />} />
      <Route path="panel" element={<MainPanel />} />
   </Routes>
  )
}

export default App;
