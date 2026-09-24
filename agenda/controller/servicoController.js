import { Tecnico } from "../model/Tecnico.js";
import { Servico } from "../model/Servico.js";
import { Instalacao } from "../model/Instalacao.js";
import { Manutencao } from "../model/Manutencao.js";
import { Vistoria } from "../model/Vistoria.js";


import{
    cadastrarServico,
    listarServicos,
    buscarServico,
    atualizarServico,
    excluirServico,
} from "../repository/servicoRepository.js"


export function cadastrarInstalacao(codigo , cliente, descricao, nomEquipamento){
    const instalacao = new Instalacao(codigo, cliente, descricao, nomEquipamento)
    cadastrarServico(instalacao);
}




export function cadastrarManutencao(codigo , cliente, descricao, defeito){
    const manutencao = new Manutencao(codigo, cliente, descricao, defeito)
    cadastrarServico(manutencao);
}




export function cadastrarVistoria(codigo , cliente, descricao, local){
    const vistoria = new Vistoria(codigo, cliente, descricao, local)
    cadastrarServico(vistoria);
}


export function associarTecnico(indice, TEC){
    buscarServico(indice).definirTecnico(TEC)
}


export function iniciarServico(indice){
      const lista = listarServicos();
      lista[indice].iniciar();
}


export function concluirServico(indice){
    const lista = listarServicos();
    lista[indice].concluir();
}


export function atualizarInstalacao(indice, codigo, cliente, descricao, nomEquipamento) {
    const antigo = buscarServico(indice);
    const atualizado = new Instalacao(codigo, cliente, descricao, nomEquipamento);
    if (antigo.tecnico) atualizado.definirTecnico(antigo.tecnico);
    atualizarServico(indice, atualizado);
}






export function atualizarManutencao(indice, codigo, cliente, descricao, defeito) {
    const antigo = buscarServico(indice);
    const atualizado = new Manutencao(codigo, cliente, descricao, defeito);
    if (antigo.tecnico) atualizado.definirTecnico(antigo.tecnico);
    atualizarServico(indice, atualizado);
}




export function atualizarVistoria(indice, codigo, cliente, descricao, local) {
    const antigo = buscarServico(indice);
    const atualizado = new Vistoria(codigo, cliente, descricao, local);
    if (antigo.tecnico) atualizado.definirTecnico(antigo.tecnico);
    atualizarServico(indice, atualizado);
}


export function deletarServico(indice){
    excluirServico(indice)
}


export function listarTodos() {
    const lista = listarServicos();


    for (let i = 0; i < lista.length; i++) {
        const s = lista[i];
        const nomeTecnico = s.tecnico ? s.tecnico.nome : "não definido";


        console.log(`Índice: ${i}`);
        console.log(`Código: ${s.codigo}`);
        console.log(`Cliente: ${s.cliente}`);
        console.log(`Descrição: ${s.descricao}`);
        console.log(`Status: ${s.status}`);
        console.log(`Técnico: ${nomeTecnico}`);
        console.log(`Execução: ${s.executar()}`);
    }
}
