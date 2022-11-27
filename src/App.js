import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NavBar from './components/NavBar';
import GlobalStyles from './styled/GlobalStyles';
import Studio from './pages/Studio';
import Hall from './pages/Hall';
import MakeUp from './pages/MakeUp';
import Dress from './pages/Dress';

function App() {
  return (
      <div className="App">
          <GlobalStyles/>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/hall" element={<Hall/>} />
            {/* <Route path="/studio" element={<Studio/>} />
            <Route path="/dress" element={<Dress/>} />
            <Route path="/makeup" element={<MakeUp/>} /> */}
            <Route path="/profile" element={<Profile/>} />
          </Routes>
      </div>
  );
}

export default App;
