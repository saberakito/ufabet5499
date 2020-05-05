import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private serviceMenu:TodoService) { }
  public menus:Todo[];
  public login_status_check:any;
  ngOnInit() {
    if(localStorage.getItem("login")=="success"){
      this.login_status_check = '1';
    }
    this.serviceMenu.getMenu().subscribe((response)=>{
      this.menus = response;
    });
  }

  logout(){
    this.serviceMenu.setLoggedIn(false);
    localStorage.setItem("login", 'failed');
    this.router.navigate(['/home']);
    window.location.reload();
  }

}

interface Todo{
  menu_id:number;
  menu_name:string;
  menu_detail:string;
  menu_route:string;
  menu_type:string;
  menu_sort:string;
}
