import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DetailPage } from '../../pages/detail/detail';
import { Sheetsu } from '../../providers/sheetsu';

/*
  Generated class for the Master page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-master',
  templateUrl: 'master.html',
  providers: [Sheetsu]
})
export class MasterPage {

  // declare publicly accessible variable
  public sheetsuData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sheetsuService: Sheetsu) {}

  ionViewDidLoad() {
    this.sheetsuService.getRemoteData()
     .subscribe(response => {
       // assign variable (async)
       this.sheetsuData = response;
     });
  }

  itemTapped(event, data) {
    this.navCtrl.push(DetailPage, {
      data: data
    });
  }

}
