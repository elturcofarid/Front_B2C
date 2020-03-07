import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { LoginComponent } from './app/components/login/login.component';
import { ProductComponent } from './app/components/product/product.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { CheckoutComponent } from './app/components/checkout/checkout.component';
import { RegisterComponent } from './app/components/register/register.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product2', component: NavbarComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
