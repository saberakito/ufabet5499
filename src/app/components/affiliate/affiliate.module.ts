import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AffiliateRoutingModule } from './affiliate-routing.module';
import { RegisterComponent } from './affiliate/register/register.component';
import { MainComponent } from './affiliate/main/main.component';
import { MenuComponent } from './affiliate/menu/menu.component';
import { IncomeComponent } from './affiliate/income/income.component';
import { MemberComponent } from './affiliate/member/member.component';
import { WithdrawComponent } from './affiliate/withdraw/withdraw.component';
import { RegisterrsComponent } from './affiliate/registerrs/registerrs.component';
import { sanitize2HtmlPipe } from './sanitize-html2.pipe';
@NgModule({
  declarations: [MainComponent,RegisterComponent,RegisterrsComponent, MenuComponent, IncomeComponent, MemberComponent, WithdrawComponent,sanitize2HtmlPipe],
  imports: [
    CommonModule,
    AffiliateRoutingModule,FormsModule
  ],
  exports: [ sanitize2HtmlPipe ]
})
export class AffiliateModule { }
