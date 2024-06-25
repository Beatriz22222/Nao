import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private chave = "AIzaSyB_uitXP6GE0n_WBNkjGwgLgQQkXcXovn0";
  private caminhoPadrao = "https://www.googleapis.com/books/v1/volumes";

  constructor(private http: HttpClient) {}

  searchBooks(query: string, startIndex: number = 0, language: string = 'pt-BR'): Promise<any> {
    const maxResults = 20;
    const params = new HttpParams()
      .set('q', query)
      .set('startIndex', startIndex.toString())
      .set('maxResults', maxResults.toString())
      .set('langRestrict', language)
      .set('key', this.chave);

    const url = `${this.caminhoPadrao}?${params.toString()}`;
    console.log(`URL: ${url}`);

    return this.http.get(url).toPromise();
  }
}
