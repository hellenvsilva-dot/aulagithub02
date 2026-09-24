const servicos = []


export function cadastrarServico(servico){
    servicos.push(servico)
}


export function listarServicos(){
    return servicos
}


export function buscarServico(indice){
    return servicos[indice]
}


export function atualizarServico(indice){
    return servicos[indice]
}


export function excluirServico(indice){
    servicos.splice(indice)
}
