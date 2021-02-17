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
      this.router.navigateByUrl('/affm/main');
    }else{
      this.status_login_rubsub = false;
    }
  }

  loginRubsub(form){
    this.todoServcie.loginRubsub(form.value.username,form.value.password).subscribe(data => {
      this.todoServcie.createUserRubsub(form.value.username).subscribe(data => {});
      try{
        var objArray = JSON.parse(data['_body']);
        
        if(objArray.ck_login=="Y"){
          this.router.navigateByUrl('/affm/main');
          localStorage.setItem("data_member_rubsub",JSON.stringify(objArray));
          localStorage.setItem("token_key_rubsub",JSON.stringify(data['token_key']));
          this.todoServcie.setLoggedInRubsub(true);
         // location.reload();
        }else{
          alert('เข้าสู่ระบบผิดพลาด');
          this.infoMessage = 'Login Failed. Please Try Again.';
        }
      }catch(e){
        this.infoMessage = 'Error Login';
      }
     
    });
  }

}
