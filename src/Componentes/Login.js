import {Fragment, useState} from 'react';

const Login = () => {
    return(
        <Fragment>
            <form>
                <div>
                    <input placeholder="Ingrese mail">
                        
                    </input>
                </div>
                <div>
                    <input placeholder="Ingrese contraseña">
                        
                    </input>
                </div>
                <div>
                    <button type="submit">Ingresar</button>
                </div>
            </form>
        </Fragment>
    );
}
export default Login;