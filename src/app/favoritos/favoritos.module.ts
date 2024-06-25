import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FavoritosPage } from './favoritos.page'; // Importe a página FavoritosPage
import { GuardService } from '../guard.service'; // Importe o serviço GuardService

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: FavoritosPage }]) // Configure a rota para FavoritosPage
  ],
  declarations: [FavoritosPage], // Declare FavoritosPage
  providers: [GuardService] // Providencie GuardService
})
export class FavoritosPageModule {}
