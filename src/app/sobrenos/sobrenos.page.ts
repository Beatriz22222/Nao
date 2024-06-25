import { Component } from '@angular/core';

@Component({
  selector: 'app-sobrenos',
  templateUrl: 'sobrenos.page.html',
  styleUrls: ['sobrenos.page.scss'],
})
export class SobreNosPage {
  student = {
    name: 'Ana Beatriz Bernardo Monteiro',
    matricula: '23105754',
    turma: 'ADS0302M',
    turno: 'Manhã',
    unidade: 'Bonsucesso',
    image: 'assets/BEATRIZ.jpeg' // Caminho para a imagem do aluno
  };
}
