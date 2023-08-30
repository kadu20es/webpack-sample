const nome = "Carlos";
const sobrenome = "Eduardo";
export const idade = 40; // permite exportar diretamente no elemento


function soma(x, y){
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export { nome, sobrenome};
export { soma as funcaoSomar };