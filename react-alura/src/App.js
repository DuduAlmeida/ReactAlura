import React, { Component } from 'react';
// import logo from './content/logo.svg';
// import { configure } from '@testing-library/react';
import 'materialize-css/dist/css/materialize.min.css'
import './css/App.css';
import './css/site.css';
import Tabela from './Tabela.js';
import Form from './Formulario.js';
import PopUp from './Helper/PopUp';
import Header from './Header';

class App extends Component{

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ]
  } 

  removeAutor = (indice) =>{
    const autores = this.state.autores;
    console.log(autores);

    this.setState({
      autores: autores.filter((autor,posAtual) => {
        return posAtual !== indice;
      })
    });

    PopUp.exibeMensagem('error','Item Removido');
  }

  escutadorDeSubmit = (autor) => {    
    this.setState({autores: [...this.state.autores,autor]})
  }

  render(){

    return (
      <>
      <Header></Header>
      <div className="App">
  
        <div id="card-table" className="card">
          <div className="card-content div-table">
            <Tabela autores={this.state.autores} removeAutor={this.removeAutor}/>
          </div>
        </div>

        <div id="card-form" className="card">
          <div className="card-content div-form">
            <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
          </div>
        </div>
      </div>
      </>
    );
  }

}

export default App;
