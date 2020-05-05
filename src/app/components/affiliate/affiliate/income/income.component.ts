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
  ngOnInit() {
    if(JSON.parse(localStorage.getItem('data_member_rubsub'))!=null){
      this.member_code = JSON.parse(localStorage.getItem('data_member_rubsub')).a_link_username;
    
      this.todoServcie.getClick(this.member_code).subscribe(data=>{
        this.click_count = data.data;
      });
    }
    
  }

}
