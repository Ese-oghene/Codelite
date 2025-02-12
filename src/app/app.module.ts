import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideDisplayComponent } from './home/slide-display/slide-display.component';
import { LoginComponent } from './home/login/login.component';
import { FooterComponent } from './home/footer/footer.component';
import { SignupComponent } from './home/signup/signup.component';
import { ContactPageComponent } from './home/contact-page/contact-page.component';
import { AboutPageComponent } from './home/about-page/about-page.component';
import { TestimonialPageComponent } from './home/testimonial-page/testimonial-page.component';
import { HeaderComponent } from './home/header/header.component';
import { GridDisplayComponent } from './home/grid-display/grid-display.component';
import { LastNewsComponent } from './home/last-news/last-news.component';
import { InnovationComponent } from './home/innovation/innovation.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideDisplayComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    ContactPageComponent,
    AboutPageComponent,
    TestimonialPageComponent,
    HeaderComponent,
    GridDisplayComponent,
    LastNewsComponent,
    InnovationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
