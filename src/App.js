import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Componentes/Login.js'
import Register from './Componentes/Register.js'
import Wall from './Componentes/Wall.js'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Wall' element={<Wall/>}/>
    </Routes>
  );
}

export default App;
