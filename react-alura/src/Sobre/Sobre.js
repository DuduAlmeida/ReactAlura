import React, { Component } from 'react';
import Header from '../Header';
import { Card, CardContent, CardHeader, Container } from './styles';

class Sobre extends Component {

    render() {

        return (
            <>
                <Header />
                <Container>

                    <Card>
                        <CardHeader>
                            <h1>Sobre</h1>
                        </CardHeader>
                        <CardContent>
                            Lorem ipsum ultrices quisque aenean eleifend convallis integer fermentum libero pulvinar ullamcorper, orci odio ultricies enim fermentum aliquet facilisis donec suspendisse neque. vel himenaeos tincidunt quam fames sapien neque sed rhoncus nisl venenatis non sit praesent congue, class ante hendrerit aliquam aptent risus congue nullam tellus urna sapien fringilla. pellentesque fringilla velit in per magna fringilla lobortis nulla eu risus, non donec pulvinar dolor aliquam euismod nam ligula. himenaeos lorem nec id urna mauris adipiscing sodales volutpat tempor, conubia pharetra urna quisque euismod suspendisse duis purus posuere, massa ac dui molestie nisi diam mi venenatis.
                        </CardContent>
                    </Card>
                </Container>
            </>
        );
    }
}

export default Sobre;