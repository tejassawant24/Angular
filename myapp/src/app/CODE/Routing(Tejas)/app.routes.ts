import { Route } from "@angular/router";
import { Product1Component } from "../Routing(Tejas)/product1/product1.component";
import { Prod1Component } from "../Routing(Tejas)/prod1/prod1.component";
import { Home1Component } from "../Routing(Tejas)/home1/home1.component";
import { ProductList1Component } from "../Routing(Tejas)/product-list1/product-list1.component";
import { ProdComponent } from "./product-list2/prod.component";
import { UserRegistrationComponent } from "../Routing(Tejas)/user-registration/user-registration.component";
import { UserLoginComponent } from "../Routing(Tejas)/user-login/user-login.component";

export const routes: Route[] = [
  {
    path: "products",
    component: Product1Component
  },
  {
    path: "products/:id",
    component: Prod1Component
  },
  {
    path: "home",
    component: Home1Component
  },
  {
    path: "productList",
    component: ProductList1Component
  },
  {
    path: "productList/:productId",
    component: ProdComponent
  },
  {
    path: "registration",
    component: UserRegistrationComponent
  },
  {
    path: "login",
    component: UserLoginComponent
  }
];
