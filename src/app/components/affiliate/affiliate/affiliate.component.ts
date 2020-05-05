import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.component.html',
  styleUrls: ['./affiliate.component.css']
})
export class AffiliateComponent implements OnInit {

  constructor(private router:Router,private todoServcie:TodoService) { }
  infoMessage:any;
  username:any;
  password:any;
  status_login_rubsub:any;
  ngOnInit() {
    localStorage.getItem('login_rubsub');
    if(localStorage.getItem('login_rubsub')=='success'){
      this.status_login_rubsub = true;
      this.router.navigateByUrl('/affiliates/main');
    }else{
      this.status_login_rubsub = false;
    }
  }

  loginRubsub(form){
    this.todoServcie.loginRubsub(form.value.username,form.value.password).subscribe(data => {
      
      if(data.success==true){
        this.router.navigateByUrl('/affiliates/main');
        localStorage.setItem("data_member_rubsub",JSON.stringify(data.data));
        localStorage.setItem("token_key_rubsub",JSON.stringify(data['token_key']));
        this.todoServcie.setLoggedInRubsub(true);
        //location.reload();
      }else{
        this.infoMessage = 'Login Failed. Please Try Again.';
        this.router.navigate(['login']);
      }
    });
  }

}
