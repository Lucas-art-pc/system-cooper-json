import { functions } from "./services.js";

const solicits = document.querySelector('[data-solicit]');

const criaSolicitacao = (id, nome, cpf, email, endereco, data) => {
    const itemLista = document.createElement("li");
    const conteudo = `
        <div class="w-[80%] bg-white rounded-lg shadow-xl p-6 my-2 mx-auto">
            <div class="flex justify-between">
                <div>
                    <h2 class="text-2xl font-medium">${nome}</h2>
                    <p>CPF: ${cpf}</p>
                    <p>Email: ${email}</p>
                    <p class="hidden">${endereco}</p>
                </div>
                <div>
                    <h3>Solicitação: #${id}</h3>
                    <p>Data solicitação: ${data}</p>
                </div>
            </div>
            <div class="flex w-[25%] mt-4 gap-3">
                <button class="btn-aceitar mt-4 bg-green-500 text-white py-2 px-4 rounded-lg w-1/2 hover:bg-green-600 transition cursor-pointer">Aceitar</button>
                <button class="btn-recusar mt-4 bg-red-500 text-white py-2 px-4 rounded-lg w-1/2 hover:bg-red-600 transition cursor-pointer">Recusar</button>
            </div>
        </div>`;

    itemLista.style = "width:100%; display: flex; justify-content:center;";
    itemLista.innerHTML = conteudo;
    itemLista.dataset.id = id;

    const btnAceitar = itemLista.querySelector('.btn-aceitar');
    btnAceitar.addEventListener('click', async () => {
        await functions.aprovaSolicitacao(nome, cpf, email, endereco);
        await functions.removeSolicitacao(id);
        itemLista.remove();
    });

    const btnRecusar = itemLista.querySelector('.btn-recusar');
    btnRecusar.addEventListener('click', () => {
        functions.removeSolicitacao(id);
        itemLista.remove();
    });

    return itemLista;
}

functions.solicitacoes()
    .then(data => {
        data.forEach(element => {
            solicits.appendChild(
                criaSolicitacao(element.id, element.nome, element.cpf, element.email, element.endereco, element.data)
            );
        });
    })
    .catch(error => console.error("Erro ao carregar solicitações:", error));
