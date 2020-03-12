import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartelaPage } from '../cartela/cartela';

/**
 * Generated class for the ConfirmaDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirma-dados',
  templateUrl: 'confirma-dados.html',
})
export class ConfirmaDadosPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmaDadosPage');
  }

   // go to cartela page
   escolherNumeros(){
    this.nav.push(CartelaPage);
  }


}
