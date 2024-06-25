import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { NavController, ToastController } from '@ionic/angular';
import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AutenticacaoService } from '../usuario/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email:string="";
  public senha:string="";
  public mensagem: string="";

  
  constructor(public autenticacaoService:AutenticacaoService,
    public router: Router,
    public toastController: ToastController
  ) {}
  ngOnInit() {
    
    console.log('LoginPage inicializada');
  }
  Login(){
    this.autenticacaoService.loginNoFirebase(this.email, this.senha)
    .then ((res) =>{
    this.router.navigate(['/folder/Inbox']);
    
    }) . catch((error) => {
    this. mensagem = "E-mail e/ou senha incorreto(s)"; 
    this. exibeMensagem();
  })
  }
    async exibeMensagem() {
    const toast = await this.toastController.create({
    message: this.mensagem,
     duration: 2000
    });
    toast. present();
    }
  
 
}