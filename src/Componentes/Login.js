import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';
import { useAuth } from '../context/authContext'
import  helpcode from '../assets/img/Help.png'


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
                if(error.code==="auth/user-not-found"){
                    setError("usuario no registrado");
                }
                else if(error.code==="auth/wrong-password"){
                    setError("contraseña incorrecta");
                }
                else if(error.code==="auth/invalid-email"){
                    setError("correo invalido")
                }
                else if(error.code==="auth/internal-error"){
                    setError("ingrese contraseña")
                }
                /*setError(error.message);*/
            }              
        };
        const loginGoogle = () => {
            google(); 
        }
    return(
        <div className='container'>   
            <div className='col-sm-7'>
            </div>
            <form className = 'col-sm-5' onSubmit={onclick}>
            <div className="helpcode">
                <img src= {helpcode} />
            </div>
                <input 
                className='form-control my-4'
                placeholder="Ingrese mail"
                type="email"
                name='email'
                onChange={handleInputChange}
                />           
                <input 
                className='form-control my-4'
                placeholder="Ingrese contraseña"
                type="password"
                name='password'
                onChange={handleInputChange}
                />    
                <button 
                className="btn btn-success"
                type="submit"
                >Iniciar sesión
                </button>  
                <p className = "col">
                <a href='#'>¿Olvidaste tu contraseña?</a>
                </p>
                <button 
                className="btn btn-success"
                type="button"
                onClick={loginGoogle}
                >Ingresa con google
                </button>
                <p>¿No tienes una cuenta?</p>
                <button 
                className="btn btn-success"
                type="button">Registrate
                </button>
                
                {error && <p>{error}</p>}
            </form>
        </div>    
        
    );
}

