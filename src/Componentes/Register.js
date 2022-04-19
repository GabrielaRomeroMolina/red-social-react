import {Fragment, useState} from 'react';

const Register = () => {
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
                    <button type="submit">Registrar</button>
                </div>
            </form>
        </Fragment>
    );
}
export default Register;