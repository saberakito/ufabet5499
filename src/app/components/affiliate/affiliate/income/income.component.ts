import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css','../main.css']
})
export class IncomeComponent implements OnInit {

  constructor(private todoServcie:TodoService) { }
  member_code:any;
  click_count:any;
  number_register:any;
  number_active:any;
  amount_all_income:any = 0;
  amount_withdraw:any = 0;
  ngOnInit() {
    if(JSON.parse(localStorage.getItem('data_member_rubsub'))!=null){
      this.member_code = JSON.parse(localStorage.getItem('data_member_rubsub')).mem_code;
    
      this.todoServcie.getClick(this.member_code).subscribe(data=>{
        this.click_count = data.data;
      });
      this.todoServcie.getRegisAndPlay().subscribe(data=>{
        this.number_register = data[0]['number_register'];
        this.number_active =  data[0]['number_active'];
      });
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

}
