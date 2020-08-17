import React, { Component } from 'react';
import Header from '../Header';
import { Container, Card, CardContent, CardHeader } from './styles';
import Table from './TabelaAutores';

class Autores extends Component {

    state = {
        autores: [
            {
                nome: 'Paulo'
            },
            {
                nome: 'Daniel'
            },
            {
                nome: 'Marcos'
            },
            {
                nome: 'Bruno'
            }
        ]
    }

    render() {

        return (
            <>
                <Header></Header>
                <Container>
                    <Card>
                        <CardHeader>
                            <h1>Autores</h1>
                        </CardHeader>
                        <CardContent>
                            <Table autores={this.state.autores} />
                        </CardContent>
                    </Card>
                </Container>
            </>
        );
    }
}

export default Autores;