const produtos = async () =>{
    const response = await fetch(`http://localhost:3000/produtos`);
    return await response.json();

};

const solicitacoes = async () =>{
    const response = await fetch(`http://localhost:3000/solicitacoes`);
    return await response.json();

};

const enviaSolicitacao = async (nome, cpf, email, endereco, data) =>{
    await fetch(`http://localhost:3000/solicitacoes`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                cpf: cpf,
                email: email,
                endereco: endereco,
                data: data
            })
        })
    .then(resposta =>{
        return resposta.body
    })
};

const mostraCooperado = async () => {
    const response = await fetch(`http://localhost:3000/cooperados`)
    return await response.json();
}

const aprovaSolicitacao = async (nome, cpf, email, endereco) =>{
    const response = await fetch(`http://localhost:3000/cooperados`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                cpf: cpf,
                email: email,
                endereco: endereco
            })
        }
    );
    return await response.json();

};


async function removeSolicitacao(id) {
    const response = await fetch(`http://localhost:3000/solicitacoes/${id}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error('Erro ao remover solicitação');
    }
}


export const functions = {
    produtos,
    solicitacoes,
    enviaSolicitacao,
    mostraCooperado,
    aprovaSolicitacao,
    removeSolicitacao
};