import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})


export class ContactusComponent implements OnInit {
 

  constructor(private todoServcie:TodoService, ) { 
    
  }
  public todoContactText:ContactgText[];

  ngOnInit() {
    //call service
    
    this.todoServcie.getTextContext().subscribe((response)=>{
        //this.sanitizedURL = this.sanitizer.bypassSecurityTrustResourceUrl(response.data.contact_text_detail)['changingThisBreaksApplicationSecurity']; 
        //console.log(response.data.contact_text_detail);
        this.todoContactText = response.data.contact_text_detail;
    });
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