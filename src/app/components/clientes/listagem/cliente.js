import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions';


class Cliente extends React.Component{
    state = {
        inicioExclusao: false
    }
    excluirClientes = () =>{
        const{inicioExclusao} = this.state;
        if(inicioExclusao) return this.setState({inicioExclusao:true});
        this.props.removeCliente(this.props.cliente.id);

    }
    alterarCliente = () =>{
        this.props.setClienteParaAlterar(this.props.cliente)
    }
    render(){
        const {cliente} = this.props
        const{inicioExclusao} = this.state;
        return(
            <tr>
                <td>{cliente.nome}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.email}</td>
                <td className="botao-alterar"
                    onClick= {this.alterarCliente}
                    style={{cursor:"pointer"}}>
                    {"Alterar"}
                </td>
                <td className="botao-excluir"
                    onClick= {this.excluirClientes}
                    style={{cursor:"pointer"}}>
                    { inicioExclusao }
                </td>
            </tr>
        );
    }
}

export default connect(null, actions)(Cliente)
   
