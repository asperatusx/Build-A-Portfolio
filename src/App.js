import './App.scss';
import Home from './pages/Home/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Customize from './pages/Customize/Customize';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/customize' element={<Customize />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
