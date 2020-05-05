import { Component, OnInit } from '@angular/core';
import { NgForm, } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css','../main.css']
})
export class MainComponent implements OnInit {

  constructor(private router:Router,private todoServcie:TodoService) { }
  haveRubSub:any;
  member_code:any;
  ngOnInit() {
    if(JSON.parse(localStorage.getItem('data_member'))!=null){
      this.member_code = JSON.parse(localStorage.getItem('data_member')).member_code;
    }
    this.todoServcie.getRubSub().subscribe(data=>{
      if(data.success==true){
        this.haveRubSub = true;
      }else{
        this.haveRubSub = false;
      }
    });
  }
  onSubmit(form: NgForm): void {
    this.todoServcie.registerRubSub(form.value).subscribe(data=>{
      if(data.success==true){
        this.router.navigate(['/affiliate']);
      }
    });
  }

 
}
