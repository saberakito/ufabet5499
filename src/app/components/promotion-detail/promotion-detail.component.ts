import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-promotion-detail',
  templateUrl: './promotion-detail.component.html',
  styleUrls: ['./promotion-detail.component.css']
})
export class PromotionDetailComponent implements OnInit {
id:any;
sub:any;
  constructor(private route:ActivatedRoute,private todoServcie:TodoService) { }
  public todoNewsDetail:Todo[];
  public adjust_page_title:string;
  public adjust_page_image_url:string;
  public adjust_page_image_name:string;
  public adjust_page_image_type:string;
  public adjust_page_description:string;
  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      //this.id =  params['id'].split("-")[1];
      this.id =  params['id'];
      this.todoServcie.getDetailNews(this.id).subscribe((response)=>{
        this.adjust_page_title = response[0].adjust_page_title;
        this.adjust_page_image_url = 'upload/files/'+response[0].adjust_page_image_name+'.'+response[0].adjust_page_image_type;
        this.adjust_page_description = response[0].adjust_page_description;
        this.todoNewsDetail = response[0];
      });
    });
  }

}
interface Todo{
  adjust_page_id:number;
  adjust_page_type:string;
  adjust_page_title:string;
  adjust_page_description:string;
  adjust_page_short_description:string;
  adjust_page_image_name:string;
  adjust_page_image_type:string;
}