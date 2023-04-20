import './styles/App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { useCycle } from 'framer-motion'

import Home from './pages/Home';

import NavBar from './components/NavBar';
import Menu from './components/Menu';

function App() {
  const [showAnimation, setShowAnimation] = useCycle("origin", "visible")
  const [linkAnimation, setLinkAnimation] = useCycle("", "visible")

  const showMenu = () => {
    setShowAnimation()
    setLinkAnimation()
  }
  return (
    <>
      <NavBar showMenu={showMenu} showAnimation={showAnimation} />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Menu linkAnimation={linkAnimation} showAnimation={showAnimation} showMenu={showMenu} />
    </>
  );
}

export default App;
