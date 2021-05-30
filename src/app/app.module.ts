import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { CustomerreviewComponent } from './MyComponents/customerreview/customerreview.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarevigerComponent } from './MyComponents/careviger/careviger.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { FeaturesComponent } from './MyComponents/features/features.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToTopComponent } from './MyComponents/scroll-to-top/scroll-to-top.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerreviewComponent,
    CarevigerComponent,
    AboutComponent,
    FeaturesComponent,
    ScrollToTopComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
