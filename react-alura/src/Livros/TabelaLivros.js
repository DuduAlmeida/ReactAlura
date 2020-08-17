import React, { Component } from 'react';


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Livro</th>
                <th>Preço</th>
            </tr>
        </thead>
    );
};

const TableBody = (prop) => {
    const linhas = prop.livros.map((livro, indice) => {
        return (
            <tr key={indice}>
                <td >{livro.nome}</td>
                <td >{livro.preco}</td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
};

class Table extends Component {    
    

    render(){
        
        const { livros } = this.props;

        return (
            <table className="highlight">
                <TableHeader />
                <TableBody livros={livros} />
            </table>
        );
    }
}

export default Table;