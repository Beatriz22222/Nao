import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastController } from '@ionic/angular';
import { GuardService } from '../guard.service'; // Atualize a importação conforme necessário

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  providers: [ApiService]
})
export class FolderPage implements OnInit {
  books: any[] = [];
  query: string = 'ionic framework';
  startIndex: number = 0;
  language: string = 'pt-BR'; 

  constructor(
    private bookApiService: ApiService,
    private router: Router,
    private toastController: ToastController,
    private guardService: GuardService // Renomeie para GuardService
  ) {}

  ngOnInit() {
    this.searchBooks();
  }

  searchBooks() {
    this.startIndex = 0; 
    this.books = []; 
    this.loadBooks();
  }

  async loadBooks(event?: any) {
    if (!this.query.trim()) {
      console.log('Query is empty, aborting search.');
      if (event) {
        event.target.complete();
      }
      return;
    }

    try {
      console.log(`Searching books with query: "${this.query}", startIndex: ${this.startIndex}`);
      const response = await this.bookApiService.searchBooks(this.query, this.startIndex, this.language);
      console.log('Response:', response); 
      if (response && response.items) {
        console.log('Books fetched:', response.items);
        this.books = this.books.concat(response.items);
        this.startIndex += 20; 
      } else {
        console.log('No items found');
      }
    } catch (error) {
      console.error('Error loading books', error);
    } finally {
      if (event) {
        event.target.complete(); 
      }
    }
  }

  async addToFavorites(book: any) {
    try {
      this.guardService.addToFavorites(book); // Use GuardService
      const toast = await this.toastController.create({
        message: `Livro "${book.volumeInfo.title}" adicionado aos favoritos!`,
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    } catch (error) {
      console.error('Erro ao adicionar aos favoritos:', error);
    }
  }

  redirectToBuy(book: any) {
    window.open(book.volumeInfo?.canonicalVolumeLink, '_blank');
  }

  loadData(event: any) {
    this.loadBooks(event);
  }
    
  openBookDetails(book: any) {
      this.router.navigate([`/book-details`,book.id], {
        state: { book }
      });
  }
}
