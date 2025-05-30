import { Routes, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
