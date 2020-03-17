import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Storage} from '@ionic/storage';

// import {SearchCarsPage} from "../search-cars/search-cars";

@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html'
})

export class SearchLocationPage {
  public fromto: any;
  // places
  public places = {
    nearby: [
      {
        id: 1,
        name: "Carros"
      },
      {
        id: 2,
        name: "Relógios"
      },
      {
        id: 3,
        name: "Viagens"
      },
      {
        id: 4,
        name: "Jóias"
      },
      {
        id: 5,
        name: "Acessórios"
      },
      {
        id: 6,
        name: "Roupas"
      }
    ],
    recent: [
      {
        id: 1,
        name: "Casas"
      }
    ]
  };

  constructor(private storage: Storage, public nav: NavController, public navParams: NavParams) {
    this.fromto = this.navParams.data;
  }

  // search by item
  searchBy(item) {
    if (this.fromto === 'from') {
      this.storage.set('pickup', item.name);
    }

    if (this.fromto === 'to') {
      this.storage.set('dropOff', item.name);
    }
    // this.nav.push(SearchCarsPage);
    this.nav.pop();
  }
}
