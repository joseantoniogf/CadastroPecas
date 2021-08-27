var listaDePecas = ["Disco de Freio", "Radiador do Motor", "Sensor Lambda", "Junta do Cabeçote", "Carburador"]

if(listaDePecas.length < 10) {
    // É possível cadastrar peças
    console.log("É possível cadastrar mais peças");
} else {
    console.log("Não há mais espaço nesta lista, impossível cadastrar");
}

let peso = 150;

if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100g");
} else {
    console.log("A peça possui peso adequado");
}

let nomePeca = "Carburador";

if(nomePeca.length > 3) {
    console.log("Nome da peça adequado para o cadastro!")
} else if(nomePeca.length == 0) {
    console.log("O nome da peça não pode estar vazio")
} else {
    console.log("O nome da peça deve possuir mais que 3 caracteres. Digite um nome válido")
}

switch (nomePeca.length) {
    case 0:
        console.log("O nome da peça não pode estar vazio")
        break;
    
    case 1:
    case 2:
    case 3:
        console.log("O nome da peça deve possuir mais que 3 caracteres. Digite um nome válido")
        break;

    default:
        console.log("Nome da peça adequado para o cadastro!")
        break; 
}