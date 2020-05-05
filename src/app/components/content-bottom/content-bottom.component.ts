import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-content-bottom',
  templateUrl: './content-bottom.component.html',
  styleUrls: ['./content-bottom.component.css']
})
export class ContentBottomComponent implements OnInit {
  public todoList:Todo[];
  constructor(private todoServcie:TodoService) { }

  ngOnInit() {
    //call service
    this.todoServcie.getTodoList(2).subscribe((response)=>{
      
      this.todoList = response;
    });
  }

}

interface Todo{
  content_id:number;
  content_title:string;
  content_description:string;
  content_short_description:string;
  content_image_url:string;
}