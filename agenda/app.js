import { Tecnico } from "./model/Tecnico.js";


import{
    cadastrarInstalacao,
    cadastrarManutencao,
    cadastrarVistoria,
    associarTecnico,
    iniciarServico,
    concluirServico,
    atualizarInstalacao,
    atualizarManutencao,
    atualizarVistoria,
    deletarServico,
    listarTodos,
}from "./controller/servicoController.js"


const tecnico1 = new Tecnico("Carlos", "Eletricista");
const tecnico2 = new Tecnico("Marina", "Refrigeração");


cadastrarInstalacao(101, "Ana Souza", "Instalação de ar-condicionado", "Split 12000 BTU");
cadastrarManutencao(102, "Bruno Lima", "Manutenção preventiva", "Ruído no compressor");
cadastrarVistoria(103, "Carla Dias", "Vistoria pós-obra", "Bloco B");


associarTecnico(0, tecnico1);
associarTecnico(2, tecnico1);


associarTecnico(1, tecnico2);


console.log("===== LISTAGEM INICIAL =====");
listarTodos();


iniciarServico(0);
concluirServico(1);


console.log("\n===== APÓS INICIAR (0) E CONCLUIR (1) =====");
listarTodos();


atualizarVistoria(2, 103, "Carla Dias", "Vistoria pós-obra (revisada)", "Bloco C");


console.log("\n===== APÓS ATUALIZAR A VISTORIA (2) =====");
listarTodos();


deletarServico(2);


console.log("\n===== APÓS EXCLUIR O ÍNDICE 0 =====");
listarTodos();


cadastrarInstalacao(104, "Diego Alves", "Instalação de câmeras", "Kit 4 câmeras");
associarTecnico(2, tecnico1);


console.log("\n-- ULTIMA LISTAGEM ---");
listarTodos();
