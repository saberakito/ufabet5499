import { Component, OnInit } from '@angular/core';
import { NgForm, } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registerrs',
  templateUrl: './registerrs.component.html',
  styleUrls: ['./registerrs.component.css']
})
export class RegisterrsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private todoServcie:TodoService) { }
  haveRubSub:any;
  sub:any;
  id:any;
  member_code:any;
  ngOnInit() {
   
    this.sub = this.route.params.subscribe(params => {
      this.id =  params['id'];
      if(this.id!=null){
        this.todoServcie.updateClick(this.id).subscribe(data=>{

        });
      }
      
    });
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
        this.router.navigate(['/affm']);
      }
    });
  }
}
