import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMnueComponent } from './components/side-mnue/side-mnue.component';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { NationalIDPipe } from './pipes/national-id.pipe';
import { CriditCardPipe } from './pipes/cridit-card.pipe';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';
import {MatDialogModule} from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartDialogComponent } from './components/cart-dialog/cart-dialog.component';
import { CartDialogChickOutComponent } from './components/product/cart-dialog-chick-out/cart-dialog-chick-out.component';
import { SliderComponent } from './components/slider/slider.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMnueComponent,
    ProductCardDirective,
    NationalIDPipe,
    CriditCardPipe,
    CartComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    MainlayoutComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent,
    CartDialogComponent,
    CartDialogChickOutComponent,
    SliderComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
