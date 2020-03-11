import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutTripPage } from '../checkout-trip/checkout-trip';

/**
 * Generated class for the CartelaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cartela',
  templateUrl: 'cartela.html',
})
export class CartelaPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartelaPage');
  }

   // go to checkout page
   checkout() {
    this.nav.push(CheckoutTripPage);
  }


}
