import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logoutRubsub(){
    localStorage.removeItem("data_member_rubsub");
    localStorage.removeItem("token_key_rubsub");
    localStorage.removeItem("login_rubsub");
    this.router.navigate(['/affm']);
  }
}
