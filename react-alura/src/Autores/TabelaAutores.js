import React, { Component } from 'react';

const TableHeader = () =>{
    return (
        <thead>
            <tr>
                <th>Autor</th>
            </tr>
        </thead>
    );
}

const TableBody = props =>{
    const linhas = props.autores.map( (autor,indice) => {
        return (
            <tr key={indice}>
                <td>{autor.nome}</td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

class Table extends Component {
    render() {

        const {autores} = this.props;

        return (
            <table className='highlight centered'>
                <TableHeader/>
                <TableBody autores={autores}/>
            </table>
        );
    }
}

export default Table;