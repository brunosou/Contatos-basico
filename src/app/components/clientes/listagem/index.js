import React from 'react';
import Ordenacao from './ordenacao';
import Pesquisa from  './pesquisa';
import ListaClientes from './lista';
import Formulario from '../formulario'

const Opcoes = () =>(
    <div className="Opcoes">
        <div>
           <Ordenacao /> 
        </div>
        <div>
            <Pesquisa />
        </div>
    </div>
)

export default class Listagem extends React.Component{
    render(){
        return(
            <div className="listagem">
                <div className="header">
                    <h2>Lista de Contatos Tic</h2>
                </div>
                <hr/>
               <Formulario/>
                <br/>
                <Opcoes/>
                <br/>
                <ListaClientes/>
            </div>
            
        )
    }
    
}