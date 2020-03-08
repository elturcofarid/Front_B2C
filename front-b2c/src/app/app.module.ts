import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './app/components/login/login.component';
import { HomeComponent } from './app/components/home/home.component';
import { ProductComponent } from './app/components/product/product.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { CheckoutComponent } from './app/components/checkout/checkout.component';
import { RegisterComponent } from './app/components/register/register.component';
import { CarouselComponent } from './app/components/carousel/carousel.component';
import { CardsComponent } from './app/components/cards/cards.component';
import { SearchComponent } from './app/components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    NavbarComponent,
    CheckoutComponent,
    RegisterComponent,
    CarouselComponent,
    CardsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
