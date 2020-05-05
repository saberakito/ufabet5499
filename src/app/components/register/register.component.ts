import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private route:ActivatedRoute,private todoServcie:TodoService) { }
  public todoRegisterText:RegisterText[];
  id:any;
  sub:any;
  public data_deatail:string = "<img src='/assets/images/loading/05.gif'>";
  public data_title:string;
  public user_name:string;
  public user_tel:string;
  public user_line:string;
  public email:string;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id =  params['id'];
     // this.id =  params['id'];
      this.todoServcie.getDataPage("register").subscribe((response)=>{
        this.data_title = response.data.menu_name;
        this.data_deatail = response.data.menu_detail;
      });
    });
    //call service
    // this.todoServcie.getTextRegister().subscribe((response)=>{
      
    //   this.todoRegisterText = response;
    // });
    
  }
  onSubmit(form: NgForm): void {
    this.todoServcie.saveMember(form.value).subscribe(data=>{
     if(data.success){
      alert("รอการตอบกลับจากพนักงาน");
     }else{
      alert("กรุณาลองอีกครั้ง");
     }
      
    });
  }

}

interface RegisterText {
  register_text_id :string;
  register_text_title :string;
  register_text_detail :string;
  register_text_sort :string;
  register_text_hide :string;
  register_text_delete :string;
  register_text_create_by :string;
  register_text_update_by :string;
  register_text_create_date :string;
  register_text_update_date :string;
}
