import {Fragment, useState} from 'react';
import '../styles/style.css';
import  helpcode from '../assets/img/Help.png'

export function Wall() {
    return(
        <div className='flex-fluid'>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="helpcode">
                    <img src= {helpcode} />
                </div>
            </nav>
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
        </div>    
    );
}
