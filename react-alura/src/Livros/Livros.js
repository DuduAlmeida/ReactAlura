import React, { Component } from 'react';
import Header from '../Header';

import { Container, Card, CardContent, CardHeader } from './styles';
import Table from './TabelaLivros';

class Livros extends Component {

    state = {
        livros: [
            {
                nome: 'Caganceiro Javascript',
                preco: 1000
            },
            {
                nome: 'Java',
                preco: '99'
            },
            {
                nome: 'Design',
                preco: '150'
            },
            {
                nome: 'DevOps',
                preco: '100'
            },
            {
                nome: 'React',
                preco: '1000'
            }
        ]
    }

    render() {        

        return (
            <>
                <Header />
                <Container>
                    <Card>
                        <CardHeader>
                            <h1>Livros</h1>
                        </CardHeader>
                        <CardContent>
                            <Table livros={this.state.livros} />
                        </CardContent>
                    </Card>
                </Container>
            </>
        );
    }
}

export default Livros;