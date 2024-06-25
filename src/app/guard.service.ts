import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  private favoritesKey = 'favorites';
  private favorites: any[] = [];

  constructor() {
    this.loadFavorites();
  }

  private loadFavorites() {
    const favorites = localStorage.getItem(this.favoritesKey);
    this.favorites = favorites ? JSON.parse(favorites) : [];
  }

  private saveFavorites() {
    localStorage.setItem(this.favoritesKey, JSON.stringify(this.favorites));
  }

  getFavorites() {
    return [...this.favorites];
  }

  addToFavorites(book: any) {
    if (!this.favorites.some(fav => fav.id === book.id)) {
      this.favorites.push(book);
      this.saveFavorites();
    }
  }

  removeFromFavorites(book: any) {
    this.favorites = this.favorites.filter(fav => fav.id !== book.id);
    this.saveFavorites();
  }
}
