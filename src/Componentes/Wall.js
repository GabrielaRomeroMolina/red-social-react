import {useState, useEffect} from 'react';
import '../styles/style.css';
import  helpcode from '../assets/img/Help.png'
import React from 'react';
import { db } from '../firebase';
import {useChat} from './useChat';


export function Wall (){
    /*const [message, setMessage] = React.useState('');
    const sendMessage = (e)=>{
        e.preventDefault();
        db.collecction('messages').add({
            timestamp: Date.now(),
            message
        });
    }*/
    /*Capturar el valor que ingresa el usuario, darle un evento al boton, pasar funcion de firebase que guarda post*/
    /*Traer post*/
    return(
        <div className='flex'>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="helpcode">
                    <img src= {helpcode} />
                </div>
            </nav>
            <form className = "row">
                <div>
                    <input 
                    className='form-control'
                    placeholder="Ingrese mensaje"
                    type="text"
                    /*value={message}*/
                    /*onChange={(e) => setMessage(e.target.value)}*/
                    />
                </div>
                <div className='Chat'>
                </div>
                <div>
                    <button 
                    /*onclick={sendMessage}*/
                    className="btn btn-success" 
                    type="submit">Publicar</button>
                </div>
            </form>
            
        </div>    
    );
};
