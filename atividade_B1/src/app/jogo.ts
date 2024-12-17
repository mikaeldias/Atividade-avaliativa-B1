export class Jogo {
    constructor(
        public codigo: number,
        public titulo: string,
        public ano_publicacao: number,
        public fabricante: string,
        public qtd_jogadores: number,
        public categoria: string,
        public tipo_jogo: string,
        public idade_jogador: number
    ) {}
}