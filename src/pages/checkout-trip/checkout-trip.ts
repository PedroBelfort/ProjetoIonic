import {Component} from "@angular/core";
import {NavController, LoadingController, ToastController} from "ionic-angular";
import {TripService} from "../../services/trip-service";

import { MinhasRifasPage } from "../minhas-rifas/minhas-rifas";

@Component({
  selector: 'page-checkout-trip',
  templateUrl: 'checkout-trip.html'
})
export class CheckoutTripPage {
  // trip data
  public trip: any;
  // number of adults
  public adults = 2;
  // date
  public date = new Date();

  public paymethods = 'creditcard';

  constructor(public nav: NavController, public tripService: TripService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    // set sample data
    this.trip = tripService.getItem(1);
  }

  // process send button
  send() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Processando pagamento..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Boa sorte!',
      duration: 100,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.nav.setRoot(MinhasRifasPage);
    }, 3000)
  }
}
