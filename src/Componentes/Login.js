import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';
import { useAuth } from '../context/authContext'
import "./Componentes/Help.png";


export function Login(){ 
        const {login, google} = useAuth()
        const navigate = useNavigate()
        const [error, setError] = useState();
        const [user, setUser] = useState({
            email:'',
            password:''
        })
        const handleInputChange = ({target:{name, value}}) => {
            setUser({...user,[name] : value}) 
        };
        const onclick = async (event) =>{
            event.preventDefault()
            try{
                await login(user.email, user.password)
                navigate("/Wall")
            }catch(error){
            setError(error.message);
            }              
        };
        const loginGoogle = () => {
            google(); 
        }
    return(
        <div className='row'>   
            <div className='col-sm-8'>
            </div>
            <form className = "col-sm-4" onSubmit={onclick}>
            <div>
                <img src= "./Help.png" />
            </div>
                <div className = "col">
                    <input 
                    className='form-control my-4'
                    placeholder="Ingrese mail"
                    type="email"
                    name='email'
                    onChange={handleInputChange}
                    />           
                </div>
                <div className = "col">
                    <input 
                    className='form-control my-4'
                    placeholder="Ingrese contraseña"
                    type="password"
                    name='password'
                    onChange={handleInputChange}
                    />    
                </div>
                <div className = "col">
                    <button 
                    className="btn btn-success"
                    type="submit"
                    >Iniciar sesión
                    </button>
                </div>
                    
                <p className = "col">
                <a href="#">¿Olvidaste tu clave?</a>
                </p>
                <div className = "col">
                    <button 
                    className="btn btn-success"
                    type="button"
                    onClick={loginGoogle}
                    >Ingresa con google
                    </button>
                </div>
                <p>¿No tienes una cuenta?</p>
                <div className = "col">
                    <button 
                    className="btn btn-success"
                    type="button">Registrate
                    </button>
                </div>
            </form>
            {error && <p>{error}</p>}
        </div>    
        
    );
}

