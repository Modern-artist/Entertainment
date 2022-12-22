import React from 'react';
import Home from './pages/Home';
import AllAchivements from "./pages/AllAchivements/AllAchivements";
import Achive from "./pages/achivement/Achive";
import Skills from './pages/skills/Skills';
import { Routes, Route} from 'react-router-dom';
// import NavBar from './components/NavBar';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllAchivements" element={<AllAchivements />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Achivement" element={<Achive />} />
      </Routes>
    </>
  );
}

export default App;
