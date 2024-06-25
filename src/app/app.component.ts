import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menu', url: '/folder/:id', icon: 'mail' },
    { title: 'Login', url: '/login', icon: 'mail' },
    { title: 'Cadastro', url: '/cadastro', icon: 'archive' },
    { title: 'Favoritos', url: '/favoritos', icon: 'heart' },
    { title: 'Sobre Nós', url: '/sobrenos', icon: 'paper-plane' },
    
    
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
