import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { GuardService } from '../guard.service'; // Importe o serviço GuardService

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  favorites: any[] = [];

  constructor(
    private toastController: ToastController,
    private guardService: GuardService // Injete o GuardService
  ) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites = this.guardService.getFavorites(); // Carregue os favoritos do GuardService
  }

  async removeFromFavorites(book: any) {
    try {
      this.guardService.removeFromFavorites(book); // Remova dos favoritos usando o GuardService
      this.loadFavorites();
      const toast = await this.toastController.create({
        message: `Livro "${book.volumeInfo.title}" removido dos favoritos!`,
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    } catch (error) {
      console.error('Erro ao remover dos favoritos:', error);
    }
  }
}
