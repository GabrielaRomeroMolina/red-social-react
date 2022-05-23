import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext'
import '../styles/style.css';
import  helpcode from '../assets/img/Help.png'

export function Register () {
    const navigate = useNavigate()
    const {singup} = useAuth()
    const [error, setError] = useState();
    const [user, setUser] = useState({
        email:'',
        password:''
    })
    const handleInputChange = ({target:{name, value}}) => {
        setUser({...user,[name] : value}) 
    };
    const handleSubmit = async (event) =>{
        event.preventDefault()
        try{
            await singup(user.email, user.password)
            navigate("/");
        }catch(error){
            if(error.code==="auth/user-not-found"){
                setError("usuario no registrado");
            }
            else if(error.code==="auth/wrong-password"){
                setError("Contraseña incorrecta");
            }
            else if(error.code==="auth/invalid-email"){
                setError("Correo invalido")
            }
            else if(error.code==="auth/internal-error"){
                setError("Ingrese contraseña")
            }
            else if(error.code==="auth/weak-password"){
                setError("La contraseña debe tener al menos 6 caracteres")
            }
            else if(error.code==="auth/missing-email"){
                setError("Ingrese un correo electronico")
            }
            /*setError(error.message);*/
        }        
    };      
    return(   
        <div className='container'>
            <div className = "col-sm-7">
            </div>
            <form className = "col-sm-5" onSubmit={handleSubmit}>
                <div className="helpcode">
                    <img src= {helpcode} />
                </div>
                <input 
                className="form-control my-4"
                placeholder="Ingrese email"
                type="text"
                name="email"
                onChange={handleInputChange}
                />
                <input 
                className="form-control my-4"
                placeholder="Ingrese contraseña"
                type="password"
                name="password"
                onChange={handleInputChange}
                />
                <button 
                className="btn btn-success"
                type="submit">Registrarme</button>
                
                {error && <p className='error'>{error}</p>}
            </form>
        </div>    
        
    );
}

