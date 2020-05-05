import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PromotionComponent } from './components/promotion/promotion.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { HowtoplayComponent } from './components/howtoplay/howtoplay.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContentBottomComponent } from './components/content-bottom/content-bottom.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';

import { PromotionDetailComponent } from './components/promotion-detail/promotion-detail.component';

import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { TodoService } from './service/todo.service';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './components/register/register.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { ResultfootballComponent } from './components/resultfootball/resultfootball.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './service/auth.service';
import { ErrorComponent } from './components/error/error.component';
import { sanitizeHtmlPipe } from './sanitize-html.pipe';
import {SlideshowModule} from 'ng-simple-slideshow';
import { PageComponent } from './components/page/page.component';
import { regCompleteComponent } from './components/regComplete/regComplete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { loginComponent } from './components/login/login.component';
import { Event_recordComponent } from './components/event_record/event_record.component';
import { Manage_dataComponent } from './components/manage_data/manage_data.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ColorSketchModule } from 'ngx-color/sketch';

import { SlickCarouselModule } from 'ngx-slick-carousel';  
import { AffiliateComponent } from './components/affiliate/affiliate/affiliate.component';
const appRoutes:Routes = [
  
  {path:"home", component:HomeComponent, canActivate:[AuthGuard]},

  {path:"affiliate", 
    component:AffiliateComponent, canActivate:[AuthGuard]
  },
  {
    path:"affiliates", 
    loadChildren: () => import('./components/affiliate/affiliate.module').then(m => m.AffiliateModule)
  },

  {path:"login", component:loginComponent, canActivate:[AuthGuard]},
  {path:"event_record", component:Event_recordComponent, canActivate:[AuthGuard]},
  {path:"manage_data", component:Manage_dataComponent, canActivate:[AuthGuard]},
  {path:"manage_data/:id", component:Manage_dataComponent, canActivate:[AuthGuard]},
  {path:"register", component:RegisterComponent, canActivate:[AuthGuard]},
  {path:"promotion", component:PromotionComponent, canActivate:[AuthGuard]},
  {path:"deposit", component:DepositComponent},
  {path:"withdraw", component:WithdrawComponent},
  {path:"resultfootball", component:ResultfootballComponent, canActivate:[AuthGuard]},
  {path:"howtoplay", component:HowtoplayComponent, canActivate:[AuthGuard]},
  {path:"contact", component:ContactusComponent, canActivate:[AuthGuard]},
  {path:"news", component:NewsComponent, canActivate:[AuthGuard]},
  {path:"regComplete", component:regCompleteComponent, canActivate:[AuthGuard]},
  {path:"news", children:[
    {path:"news-detail/:id", component:NewsDetailComponent, canActivate:[AuthGuard]}
  ]},
  {path:"promotion", children:[
    {path:"promotion-detail/:id", component:PromotionDetailComponent, canActivate:[AuthGuard]}
  ]},
  {path:"home", children:[
    {path:"news-detail/:id", component:NewsDetailComponent, canActivate:[AuthGuard]}
  ]},
  {path:"page/:id", component:PageComponent, canActivate:[AuthGuard]},
  { path:"404", component:ErrorComponent },
  { path:"", redirectTo:'/home', pathMatch:'full' },
  { path:"**", component:ErrorComponent },
]
@NgModule({
  declarations: [
    AffiliateComponent,
    ErrorComponent,
    AppComponent,
    RegisterComponent,
    PromotionComponent,
    DepositComponent,
    WithdrawComponent,
    HowtoplayComponent,
    ContactusComponent,
    NavbarComponent,
    MenuComponent,
    HomeComponent,
    loginComponent,
    Event_recordComponent,
    Manage_dataComponent,
    ContentBottomComponent,
    FooterComponent,
    NewsComponent,
    regCompleteComponent,
    NewsDetailComponent,
    ResultfootballComponent,
    sanitizeHtmlPipe,
    PageComponent,
    PromotionDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorSketchModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgImageSliderModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
    SlideshowModule,
    RouterModule.forRoot(appRoutes,{scrollPositionRestoration: 'enabled'}),
    BrowserAnimationsModule,
    SlickCarouselModule 
  ],
  exports: [ sanitizeHtmlPipe ],
  providers: [TodoService, AuthGuard,AuthService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
