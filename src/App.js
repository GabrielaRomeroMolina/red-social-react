import { Route, Routes } from 'react-router-dom';
import {Login} from './Componentes/Login';
import {Register} from './Componentes/Register';
import {Wall} from './Componentes/Wall';
import {AuthProvider} from './context/authContext';

function App() {
  return (
    <div className='container mt-3'>
    <AuthProvider className="AuthProvider">
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Wall' element={<Wall/>}/>
    </Routes>
    </AuthProvider>
    </div>
  );
}

export default App;
