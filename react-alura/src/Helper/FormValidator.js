import validador from 'validator';

class FormValidator {

    constructor(validacoes) {
        this.validacoes = validacoes;
    }

    valida(state) {

        let validacao = this.valido();

        this.validacoes.forEach((regra, indice) => {

            if(!validacao[regra.campo].isInvalid){

                const campoValor = state[regra.campo.toString()];
                const metodoValidacao = typeof(regra.metodo) === 'string' ? validador[regra.metodo] : regra.metodo;
                const args = regra.args || [];
    
                console.log(campoValor);
                console.log(metodoValidacao);
    
                if (metodoValidacao(campoValor,...args, state) !== regra.validoQuando) {
                    validacao[regra.campo] = {
                        isInvalid: true,
                        message: regra.message
                    };
                    validacao.isValid = false;
                }
            }
        });

        return validacao;
    }

    valido() {
        const validacao = {};

        this.validacoes.map(regra => (
            validacao[regra.campo] = {
                isInvalid: false,
                message: ''
            }
        ));
        console.log(validacao);

        return { isValid: true, ...validacao }
    }
}

export default FormValidator;

