import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import {SearchLocationPage} from "../search-location/search-location";
import { TripService } from "../../services/trip-service";
import { TripDetailPage } from "../trip-detail/trip-detail";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  public search = {
    name: "Relógios, Carros, Viagens",
    date: new Date().toISOString()
  }

  public trips: any;


  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController, public tripService: TripService) {
 
    this.trips = tripService.getAll();
  }

  ionViewWillEnter() {
    // this.search.pickup = "Rio de Janeiro, Brazil";
    // this.search.dropOff = "Same as pickup";
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = "Relógios, Carros, Viagens"
      } else {
        this.search.name = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  // go to result page
 // doSearch() {
   // this.nav.push(TripsPage);
  //}

  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}

//
