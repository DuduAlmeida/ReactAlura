import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autor</th>
                <th>Titulo</th>
                <th>Preço</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const linhas = props.autores.map((linha, indice) => {
        return(
            <tr key={indice}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button className="btn botao" onClick={ () => props.removeAutor(indice)}>Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {
    render(){
        const {autores, removeAutor} = this.props;

        return(
            <table className="centered highlight">
                <TableHead/>
                <TableBody autores={autores} removeAutor={removeAutor}/>
            </table>
        );
    }
}

export default Tabela;