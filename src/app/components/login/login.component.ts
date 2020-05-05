import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class loginComponent {
  constructor(private router:Router, private loginService: TodoService){}
  public username;
  public password;

  infoMessage = '';
  ngOnInit() {
    if(localStorage.getItem("login")=="success"){
      this.router.navigate(['/home']);
    }
  }
  public Validateuser(){
    this.loginService.ValidateUser(this.username,this.password).subscribe(data => {
      if(data.success==true){
       // this.router.navigateByUrl('/home');
        this.loginService.setLoggedIn(true);
        this.infoMessage = '';
        window.location.reload();
      }else{
        this.infoMessage = 'Login Failed. Please Try Again.';
        this.router.navigate(['login']);
      }
    });
  }
}

interface ContactgText {
  contact_text_id :string;
  contact_text_title :string;
  contact_text_detail :string;
  contact_text_sort :string;
  contact_text_hide :string;
  contact_text_delete :string;
  contact_text_create_by :string;
  contact_text_update_by :string;
  contact_text_create_date :string;
  contact_text_update_date :string;
}