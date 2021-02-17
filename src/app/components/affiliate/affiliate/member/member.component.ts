import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css','../main.css']
})
export class MemberComponent implements OnInit {

  constructor(private todoServcie:TodoService) { }
  listMember:any;
  ngOnInit() {
    this.todoServcie.getMemberAff().subscribe(data=>{
      this.listMember = data;
    });
  }

}
