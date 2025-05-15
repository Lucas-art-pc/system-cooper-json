import { functions } from "./services.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const nome = evento.target.querySelector('[data-nome]').value;
    const email = evento.target.querySelector('[data-email]').value;
    const cpf = evento.target.querySelector('[data-cpf]').value;
    const endereco = evento.target.querySelector('[data-endereco]').value;
    const dataAtual = new Date();
    const data = (dataAtual.toLocaleDateString("pt-BR"));
    functions.enviaSolicitacao(nome, cpf, email,  endereco, data)
    window.location.href = "index.html"
})