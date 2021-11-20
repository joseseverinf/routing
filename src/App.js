import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import NumberFour from './components/4';
import Hello from './components/Hello';
import HelloBlue from './components/HelloBlue';
import HelloRed from './components/HelloRed';


function App() {
    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/4" element={<NumberFour />}/>
          <Route path="/Hello" element={<Hello />}/>
          <Route path="/HelloBlue" element={<HelloBlue />}/>
          <Route path="/HelloRed" element={<HelloRed />}/>
        </Routes>
      </BrowserRouter>        
    </>
  );
}

export default App;