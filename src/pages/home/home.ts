import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MasterPage } from '../../pages/master/master';
import { IpadPage } from '../../pages/ipad/ipad';
import { IphonePage } from '../../pages/iphone/iphone';
import { LaptopPage } from '../../pages/laptop/laptop';
import { KeyboardPage } from '../../pages/keyboard/keyboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
		masterPage = MasterPage;
    ipadPage = IpadPage;
    iphonePage = IphonePage;
    laptopPage = LaptopPage;
    keyboardPage = KeyboardPage;
    

  constructor(public navCtrl: NavController) {
    
  }

}