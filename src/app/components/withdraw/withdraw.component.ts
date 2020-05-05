import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private todoServcie:TodoService) { }
  data_title:any;
  data_deatail:any;
  ngOnInit() {
    this.todoServcie.getDataPage('withdraw2').subscribe((response)=>{
      this.data_title = response.data.menu_name;
      this.data_deatail = response.data.menu_detail;
      
    });
  }

}
