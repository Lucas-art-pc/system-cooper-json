import { functions } from "./services.js";

const criaProduto = (id, nome, descricao, preco, imagem) => {
    const itemLista = document.createElement("li");
    const conteudo =
        `<div class="bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-xl p-6 text-center my-8 flex flex-col justify-between items-center w-full max-w-sm transform transition hover:-translate-y-1 hover:shadow-2xl duration-300">
  <div class="relative w-full h-60 rounded-2xl overflow-hidden">
    <img src="${imagem}" alt="Produto" class="object-cover w-full h-full transition duration-300 hover:scale-105">
    <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
  </div>
  <div class="mt-5 w-full">
    <h2 class="text-xl font-bold text-gray-800 mb-1 tracking-wide">${nome}</h2>
    <p class="text-sm text-gray-500 mb-2">${descricao}</p>
    <p class="text-lg font-semibold text-blue-600">R$ ${preco}</p>
  </div>
  <button
    class="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-2 px-6 rounded-full w-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
    Ver Produto
  </button>
</div>
`

    itemLista.innerHTML = conteudo;
    itemLista.dataset.id = id;
    return itemLista;
};

const prods = document.querySelector('[data-prods]');
functions.produtos()
    .then(
        data => {
            data.forEach(element => {
                prods.appendChild(criaProduto(element.imagem, element.nome, element.descricao, element.preco, element.imagem))
            })
        })