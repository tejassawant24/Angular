import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { gadgetDetail } from './gadget';
import { GadgetsComponent } from './gadget.component';
import { TablesComponent } from './tables.component';
import { tableDetails } from './tables';


@NgModule({
  declarations: [
    AppComponent,
    GadgetsComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    gadgetDetail,
    tableDetails
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
