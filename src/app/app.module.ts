import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MasterPage } from '../pages/master/master';
import { DetailPage } from '../pages/detail/detail';

import { IpadPage } from '../pages/ipad/ipad';
import { IphonePage } from '../pages/iphone/iphone';
import { LaptopPage } from '../pages/laptop/laptop';
import { KeyboardPage } from '../pages/keyboard/keyboard';



import { Sheetsu } from '../providers/sheetsu';
import { Productcategory } from '../providers/productcategory';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MasterPage,
    DetailPage,
    IpadPage,
    IphonePage,
    LaptopPage,
    KeyboardPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MasterPage,
    DetailPage,
    IpadPage,
    IphonePage,
    LaptopPage,
    KeyboardPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Sheetsu, Productcategory]
})
export class AppModule {}