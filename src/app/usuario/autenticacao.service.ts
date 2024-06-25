import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(public ngFireAuth:AngularFireAuth, private navCtrl: NavController) {}
  
  ngOnInit() {
    console.log('CadastroPage inicializada');
  }
  
  loginNoFirebase(email:string, passoword:string){
    return this.ngFireAuth.signInWithEmailAndPassword(email,passoword)
  }

   insereNoFirebase(email:string,password:string) {
     return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
  }
}
