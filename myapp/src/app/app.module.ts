import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { LaptopBrandComponent } from "./CODE/Assignment1/laptop.component";
import { MobileBrandComponent } from "./CODE/Assignment1/mobile.component";
import { Info } from "./CODE/Assignment3/malefemaleinfo.component";

import { ParentComponent } from "./CODE/test/product/parent.component";
import { ChildComponent } from "./CODE/test/product/child.component";

import { addedProduct1Component } from "./CODE/assignment5/parent.component";
import { product1Component } from "./CODE/assignment5/child.component";

import { TV } from "./CODE/assignment6/tv.component";
import { MOBILE } from "./CODE/assignment6/mobile.component";
import { AC } from "./CODE/assignment6/ac.component";
import { LAPTOP } from "./CODE/assignment6/laptop.component";
import { List } from "./CODE/assignment6/parent.component";

import { TwitterComponent } from "./CODE/Assignment4/twitter.component";

import { HeartComponent } from "./CODE/Assignment4/heart.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TemplateComponet } from "./templateForm/templateForm(Vipul Sir)/template.component";

import { Template1Component } from "./templateForm/templateForm(Tejas)/template1.component";

import { ProPipe } from "./CODE/http-to-https/https.pipes";
import { HttpsComponent } from "./CODE/http-to-https/https.component";

import { ReactiveComponent } from "./reactiveForm/reactiveForm (vipul sir)/reactiveForm.component";

import { ReactiveFormComponent } from "./reactiveForm/reactiveForm(tejas)/reactiveForm1.component";

import { NavbarComponent } from "./CODE/Routing(vipul sir)/navbar/navbar.component";
import { HomeComponent } from "./CODE/Routing(vipul sir)/home/home.component";
import { AboutComponent } from "./CODE/Routing(vipul sir)/about/about.component";
import { RouterModule } from "@angular/router";
import { routes } from "./CODE/Routing(vipul sir)/app.routes";
import { About1Component } from "./CODE/Routing(vipul sir)/about1/about1.component";
import { About2Component } from "./CODE/Routing(vipul sir)/about2/about2.component";

import { ProductComponent } from "../app/CODE/Routing(Tejas)/product/product.component";
import { Navbar1Component } from "./CODE/Routing(Tejas)/navbar1/navbar1.component";
import { TestComponent } from "./CODE/test/test.component";
import { Devices } from "./CODE/Assignment1/device";

@NgModule({
  declarations: [
    AppComponent,
    LaptopBrandComponent,
    MobileBrandComponent,

    TestComponent,
    Info,
    HeartComponent,
    TwitterComponent,
    ParentComponent,
    ChildComponent,
    addedProduct1Component,
    product1Component,
    TV,
    MOBILE,
    AC,
    LAPTOP,
    List,
    TemplateComponet,
    Template1Component,
    ProPipe,
    HttpsComponent,
    ReactiveComponent,
    ReactiveFormComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    About1Component,
    About2Component,
    ProductComponent,
    Navbar1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Devices],
  bootstrap: [AppComponent]
})
export class AppModule {}
