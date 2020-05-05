import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {


  constructor(private todoServcie:TodoService) { }
  public todoPromotionText:PromotionText[];
  ngOnInit() {
    this.todoServcie.getTextPromotion().subscribe((response)=>{
        this.todoPromotionText = response;
      //  console.log(this.todoPromotionText);
    });
   
  }

}

interface PromotionText {
  adjust_page_id :string;
  adjust_page_type :string;
  adjust_page_title :string;
  adjust_page_description :string;
  adjust_page_short_description :string;
  adjust_page_image_name :string;
  adjust_page_image_type :string;
  adjust_page_sort :string;
  adjust_page_hide :string;
  adjust_page_delete :string;
  adjust_page_create_by :string;
  adjust_page_create_date :string;
  adjust_page_update_date :string;
}