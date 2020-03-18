import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { RifaCompradaPage } from '../rifa-comprada/rifa-comprada';
import { TripService } from '../../services/trip-service';
import { HomePage } from '../home/home';
import { RifaPremiadaPage } from '../rifa-premiada/rifa-premiada';

/**
 * Generated class for the MinhasRifasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minhas-rifas',
  templateUrl: 'minhas-rifas.html',
})
export class MinhasRifasPage {
 
  public trips: any;

  public tab = 'todas';

  constructor(public nav: NavController, public navParams: NavParams,  public tripService: TripService) {
    this.trips = tripService.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhasRifasPage');
  }

  VerRifaComprada() {
    this.nav.push(RifaCompradaPage);
  }

  goHome(){
    this.nav.setRoot(HomePage);
  }

  VerRifaPremiada(){
    this.nav.push(RifaPremiadaPage);
  }
 


}
