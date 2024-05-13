import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Public/Home';
import {BrowserRouter , Routes, Route, Navigate} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='*' element={<Navigate to='/' />} />

    </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
