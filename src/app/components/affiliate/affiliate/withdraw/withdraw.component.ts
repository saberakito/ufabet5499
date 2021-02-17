import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css','../main.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private todoServcie:TodoService) { }
  amount_all_income:any;
  amount_withdraw:any;
  ngOnInit() {
    this.todoServcie.getAmountIncome().subscribe(data=>{
      if(data!=null){
        this.amount_all_income = data['data']['aa_amount_total'];
        this.amount_withdraw = data['data']['aa_amount_withdraw'];
      }else{
        this.amount_all_income = '0';
        this.amount_withdraw = '0';
      }
    });
  }

}
