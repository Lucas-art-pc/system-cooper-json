import { functions } from "./services.js";

const tabelaCooperado = document.querySelector('[data-cooperados]');
function criarLinhaCooperado(id, nome, cpf, email, endereco) {
    const cooperado = document.createElement('tr');
    const linhaCooperado = `
        <td class="px-6 py-4 whitespace-nowrap">${id}</td>
        <td class="px-6 py-4 whitespace-nowrap">${nome}</td>
        <td class="px-6 py-4 whitespace-nowrap">${cpf}</td>
        <td class="px-6 py-4 whitespace-nowrap">${email}</td>
        <td class="px-6 py-4 whitespace-nowrap">${endereco}</td>
    `;
    
    cooperado.innerHTML = linhaCooperado;
    return cooperado;
}

functions.mostraCooperado()
    .then(data => {
        data.forEach(element => {
            tabelaCooperado.appendChild(criarLinhaCooperado(element.id, element.nome, element.cpf, element.email, element.endereco));
        });
    })
    .catch(error => console.error("Erro ao carregar solicitações:", error));
