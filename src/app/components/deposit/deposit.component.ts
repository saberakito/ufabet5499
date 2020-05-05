import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private route:ActivatedRoute,private todoServcie:TodoService) { }
  data_title:any;
  data_deatail:any;
  ngOnInit() {
    this.todoServcie.getDataPage('deposit2').subscribe((response)=>{
      this.data_title = response.data.menu_name;
      this.data_deatail = response.data.menu_detail;
      
    });
  }

}
