import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosOsJogos } from './list_jogos';
import { Jogo } from './jogo';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todososjogos: TodosOsJogos = new TodosOsJogos();
  codigo: number = 0;
  titulo: string = '';
  ano_publicacao: number = 0;
  fabricante: string = '';
  qtd_jogadores: number = 0;
  categoria: string = '';
  tipo_jogo: string = '';
  idade_jogador: number = 0

  adcionarItem() {
    const AddJogo: Jogo = new Jogo(
      this.codigo,
      this.titulo,
      this.ano_publicacao,
      this.fabricante,
      this.qtd_jogadores,
      this.categoria,
      this.tipo_jogo,
      this.idade_jogador
    );
    this.todososjogos.adicionarItem(AddJogo);
  }

  removerItem(indice: number) {
    this.todososjogos.removerItem(indice);

  
    
  }
  idadeMinCartas(){
    // No campo "Categoria do jogo, digite: "Jogo de cartas" para ver a regra.
}
  qtdJogadores(){
    // No campo "Categoria do jogo, digite: "Jogo de tabuleiro" para ver a regra.
  }
}



