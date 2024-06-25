import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {
  book: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.book = navigation.extras.state['book'];
    }
  }

  ngOnInit() {
    if (!this.book) {
      const id = this.route.snapshot.paramMap.get('id');
      
    }
  }
  goToFolderPage() {
    this.router.navigate(['/']); // Navega de volta para a página inicial
  }
}
