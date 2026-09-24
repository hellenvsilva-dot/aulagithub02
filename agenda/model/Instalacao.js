import { Servico } from "./Servico.js";


export class Instalacao extends Servico{
    constructor(codigo , cliente, descricao, nomEquipamento){
        super(codigo, cliente, descricao)
        this.nomEquipamento = nomEquipamento;
    }


    executar(){
        return `O equipamento ${this.nomEquipamento} será instalado`
    }
}

