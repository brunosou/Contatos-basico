import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';


class Ordenacao extends React.Component {
    render(){
        const {ordenacao: valor} = this.props
        return(
            <div className="Ordenacao">
                <label>Ordenar por:</label>
                <select
                    value={valor || "z-a"}
                    onChange={this.props.setOrdenacao}>
                    <option value="a-z">Alfabetica de A-Z</option>
                    <option value="z-a">Alfabetica de Z-A</option>
                    <option value="criacao">Criação</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    ordenacao: state.clientes.ordenacao
})

export default connect(mapStateToProps, actions)(Ordenacao);