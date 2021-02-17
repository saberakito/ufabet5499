import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './affiliate/register/register.component';
import { MainComponent } from './affiliate/main/main.component';
import { IncomeComponent } from './affiliate/income/income.component';
import { MemberComponent } from './affiliate/member/member.component';
import { WithdrawComponent } from './affiliate/withdraw/withdraw.component';
import { RegisterrsComponent } from './affiliate/registerrs/registerrs.component';
const routes: Routes = [
     {path:'register',component:RegisterComponent},
     {path:'register/:id',component:RegisterComponent},
     {path:'registerrs',component:RegisterrsComponent},
     {path:'main',component:MainComponent},
     {path:'income',component:IncomeComponent},
     {path:'member',component:MemberComponent},
     {path:'withdraw',component:WithdrawComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AffiliateRoutingModule { }
