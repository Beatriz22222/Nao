import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController, ToastController } from '@ionic/angular';
import { AutenticacaoService } from '../usuario/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public nome:string="";
  public email:string="";
  public senha:string="";
  public telefone:string="";
  public mensagem: string="";
  
  
  constructor( public autenticacaoService:AutenticacaoService,
    public router: Router,
    public toastController: ToastController ) { }

  ngOnInit() {
    
    console.log('CadastroPage inicializada');
  }
  Cadastro() {
    this.autenticacaoService.insereNoFirebase(this.email, this.senha)
      .then((res) => {
        // Cadastro realizado com sucesso, exibir mensagem
        this.mensagem="Usuário cadastrado com sucesso";
        this.router.navigate(['/login']);
      
    }) . catch((error) => {
    this. mensagem = "Erro ao incluir usuário"; 
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
