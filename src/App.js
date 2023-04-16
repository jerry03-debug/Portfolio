import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/sidebar" element={<Sidebar/>}/>
    </Routes>
   </>
  );
}

export default App;
