import { Jogo } from "./jogo";

export class TodosOsJogos {
    itens : Jogo[] = [];

    adicionarItem(item: Jogo) {
        this.itens.push(item);
    }

    removerItem(indice: number){
        this.itens.splice(indice, 1);
    }

    idadeMinCartas(){
        return 'A idade Minima para jogar deve ser 10 anos de idade.'
    }
}