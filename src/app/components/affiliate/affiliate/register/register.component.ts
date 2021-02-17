import { Component, OnInit } from '@angular/core';
import { NgForm, } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Pipe({ name: 'sanitizeHtml2'})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _sanitizer:DomSanitizer,private route:ActivatedRoute,private router:Router,private todoServcie:TodoService) { }
  haveRubSub:any;
  sub:any;
  id:any;
  member_code:any;
  data_deatail:any = '';
  
  ngOnInit() {
   
    this.sub = this.route.params.subscribe(params => {
      this.id =  params['id'];
      if(this.id!=null){
        this.todoServcie.updateClick(this.id).subscribe(data=>{
          debugger;
          $("#content_html").replaceWith('<iframe frameborder="0" height="100%" scrolling="yes" src="https://wbox88.com/registeraff?token=0b76e8e972e85f11f605f9487fa3f7d970b14f9f&affm='+data['key']+'" width="100%"></iframe>');
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
  transform(value:string):SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }
  onSubmit(form: NgForm): void {
    this.todoServcie.registerRubSub(form.value).subscribe(data=>{
      if(data.success==true){
        this.router.navigate(['/affiliate']);
      }
    });
  }
}
