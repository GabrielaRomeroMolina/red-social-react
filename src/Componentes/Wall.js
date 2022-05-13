import {Fragment, useState} from 'react';
import '../styles/style.css';
export function Wall() {
    return(
        <Fragment>
            <form className = "row">
                <div>
                    <input 
                    className='form-control'
                    placeholder="Nombre"
                    type="text"
                    />   
                </div>
                <div>
                <textarea 
                className='form-control'
                id="publicación" name="publicación">
                </textarea>
                </div>
                <div>
                    <button 
                    className="btn btn-success" 
                    type="submit">Publicar</button>
                </div>
            </form>
        </Fragment>
    );
}
