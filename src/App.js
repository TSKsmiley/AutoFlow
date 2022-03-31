import { Route, Routes } from 'react-router-dom';
import CreateFlowPanel from './CreateFlowPanel';
import LandingPage from './LandingPage';
import Login from './Login';
import MainPanel from './MainPanel';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="login" element={<Login />} />
      <Route path="panel" element={<MainPanel />} />
      <Route path="createPanel" element={<CreateFlowPanel />} />
   </Routes>
  )
}

export default App;
