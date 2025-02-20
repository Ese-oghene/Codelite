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
import { PaymentMethodComponent } from './home/payment-method/payment-method.component';
import { TeamsComponent } from './home/teams/teams.component';
import { RiskComponent } from './home/risk/risk.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ChartComponent } from './home/chart/chart.component';
import { DataTableComponent } from './home/data-table/data-table.component';

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
    InnovationComponent,
    PaymentMethodComponent,
    TeamsComponent,
    RiskComponent,
    DashboardComponent,
    ChartComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
