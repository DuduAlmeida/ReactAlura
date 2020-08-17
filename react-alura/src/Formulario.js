import React, { Component } from 'react';
import FormValidator from './Helper/FormValidator';
import PopUp from './Helper/PopUp';

class Formulario extends Component {

    constructor(props) {

        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                message: 'Insira um Nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                message: 'Insira um Livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                arg:[{min:0.0, max:9999}],
                validoQuando: true,
                message: 'Insira um Preço com valor numérico'
            },
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido()
        }
        this.state = this.stateInicial;

        
    }

    escutadorDeInput = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {
        const validacao = this.validador.valida(this.state);
        console.log(validacao);

        if (validacao.isValid) {

            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
            PopUp.exibeMensagem('success', 'Adicionado com Sucesso');
        }else{
            const {nome, livro, preco} = validacao;
            const  campos = [nome, livro, preco];
            const camposInvalidos = campos.filter( campo => {
                return campo.isInvalid;
            });

            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message);
            })
        }
    }


    render() {

        const { nome, livro, preco } = this.state;
        return (
            <form >
                <div className="row">

                    <div className="col-sm-4 input-field">

                        <label htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                        />
                    </div>

                    <div className="col-sm-4 input-field">

                        <label htmlFor="livro">Livro</label>
                        <input
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput}
                        />
                    </div>

                    <div className="col-sm-4 input-field">

                        <label htmlFor="preco ">Preço</label>
                        <input
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                </div>


                <button type="button" onClick={this.submitFormulario} className="btn botao w50pc">Salvar</button>
            </form>
        );
    }
}

export default Formulario;