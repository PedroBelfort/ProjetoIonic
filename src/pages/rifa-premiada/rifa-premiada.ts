import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TripService } from '../../services/trip-service';

/**
 * Generated class for the RifaPremiadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rifa-premiada',
  templateUrl: 'rifa-premiada.html',
})
export class RifaPremiadaPage {

  public trip: any;
  public tab = 'premio';


  constructor(public navCtrl: NavController, public navParams: NavParams, public tripService: TripService) {
    this.trip = tripService.getItem(1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RifaPremiadaPage');
  }

}
