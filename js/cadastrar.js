export function cadastrar(nomeProduto, dataValidade, quantidade, lote, tipoProduto) {
    const data = {
        "nomeProduto": nomeProduto,
        "dataValidade": dataValidade,
        "quantidade": quantidade,
        "lote": lote,
        "tipoProduto": tipoProduto
    }

    fetch("http://localhost:3333/api/cadastroProduto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((result) => {
        Swal.fire({
            icon: "success",
            title: "Cadastrado!",
            text: "Produto Cadastrado com Sucesso."
        });
    })
    .catch((error) => {
        Swal.fire({
            icon: "error",
            title: "Erro ao Cadastrar Produto!",
            text: "Produto não cadastrado"
        });
    })
}
