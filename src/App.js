import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NavBar from './components/NavBar';
import GlobalStyles from './styled/GlobalStyles';
import "./css/default.css";

function App() {
  return (
    
      <div className="App">
          <GlobalStyles />
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        
      </div>
    
  );
}

export default App;
