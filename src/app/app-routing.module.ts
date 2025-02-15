import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideDisplayComponent } from './home/slide-display/slide-display.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { ContactPageComponent } from './home/contact-page/contact-page.component';
import { AboutPageComponent } from './home/about-page/about-page.component';
import { TestimonialPageComponent } from './home/testimonial-page/testimonial-page.component';
import { HeaderComponent } from './home/header/header.component';
import { LastNewsComponent } from './home/last-news/last-news.component';
import { InnovationComponent } from './home/innovation/innovation.component';
import { PaymentMethodComponent } from './home/payment-method/payment-method.component';
import { TeamsComponent } from './home/teams/teams.component';
import { RiskComponent } from './home/risk/risk.component';
const routes: Routes = [
  { path: '', component: SlideDisplayComponent },
  { path: 'login', component: LoginComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'risk', component:  RiskComponent  },
  { path: 'lastest-news', component: LastNewsComponent },
  { path: 'innovation', component: InnovationComponent },
  { path: 'payment', component: PaymentMethodComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'testimonials', component: TestimonialPageComponent },
  { path: 'header', component: HeaderComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
