import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext'
import '../styles/style.css';

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
            setError(error.message);
        }        
    };      
    return(   
        <div className='row'>
            <div className = "col-sm-8">
            </div>
            <form className = "col-sm-4" onSubmit={handleSubmit}>
                
                <div className="col">
                    <input 
                    className="form-control my-4"
                    placeholder="Ingrese email"
                    type="text"
                    name="email"
                    onChange={handleInputChange}
                    />
                </div>
                <div className="col">
                <input 
                    className="form-control my-4"
                    placeholder="Ingrese contraseña"
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button 
                    className="btn btn-success"
                    type="submit">Registrarme</button>
                </div>
                {error && <p>{error}</p>}
            </form>
        </div>    
        
    );
}

