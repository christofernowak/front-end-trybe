import validator from 'validator';

const campoDeTexto = document.querySelector('#value');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');


button.addEventListener('click',(event) => {
    event.preventDefault();

const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    email: validator.isEmail(campoDeTexto.value),
};
const validar = campos[seletor.value] ? 'A validação está correta' : 'A validação está errada '
textoDeSaida.innerHTML = validar;
});