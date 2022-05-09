import { Route, Routes } from 'react-router-dom';
import CreateFlowPanel from './views/CreateFlowPanel';
import LandingPage from './views/LandingPage';
import Login from './views/Login';
import MainPanel from './views/MainPanel';

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
