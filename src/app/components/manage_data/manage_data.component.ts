import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { ActivatedRoute } from '@angular/router';
import { ColorEvent } from 'ngx-color';
@Component({
  selector: 'app-manage_data',
  templateUrl: './manage_data.component.html',
  styleUrls: ['./manage_data.component.css']
})


export class Manage_dataComponent implements OnInit {
 

  constructor(private route:ActivatedRoute,private todoServcie:TodoService, ) { 
    
  }
  public todoContactText:ContactgText[];
  id:any;
  sub:any;
  ngOnInit() {
    //call service
    
    this.sub = this.route.params.subscribe(params => {
      this.id =  params['id'];
    });
  }

  rederContent(){
    alert();
  }

  handleChange($event: ColorEvent) {
    console.log($event.color);
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
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