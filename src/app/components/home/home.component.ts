import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { TodoService } from 'src/app/service/todo.service';
import { IImage } from 'ng-simple-slideshow';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"
// import * as M from '../../../assets/script/materialize/js/materialize.min.js';
import * as $ from 'jquery';
import * as AOS from 'aos';


declare  var testHoldon,HoldOn,validURL:  any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public user_name:string;
  public user_tel:string;
  public user_line:string;
  public dp_link:string = 'https://www.facebook.com/ejan2016/posts/1471403766353958';
  public text_return:string = ''; 
  
  public dp_id:string;
  public image_link:string;
  public all_likes:string;
  public all_comments:string;
  public image_post:string;
  public post_message:string;
  public name_page:string;
  public link_like:string;
  public data_user_like:any;
  public user_win:any;
  public user_win_id:any;
  public data_user_win:any;
  
  images = [  
    // { img: "/assets/images/bg_slide/slide.gif" },  
     //{ img: "/assets/images/bg_slide/slide1.jpg" },
  ];  
  
  slideConfig = {
    "slidesToShow": 1,  
    "dots": false,  
    "infinite": true ,
    "autoplay":true ,
    "autoplaySpeed":7000,
    mobileFirst: true,
    centerMode: true,
    arrows: false,
    centerPadding: '0.1px',
  };
  height: string = '';
  imageSize:{width:600, height: 300};
  arrowSize: string = '30px';
  showArrows: boolean = false;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 7000;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = '100% 100%';
  backgroundPosition: string = 'top center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = false;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = true;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;
  imageObject: Array<object> = [{
      // image: '/assets/images/bg_slide/Slide2.jpg',
      // thumbImage: '/assets/images/bg_slide/Slide2.jpg'
  }, 

  // {
  //     image: '/assets/images/content/slide2.jpg',
  //     thumbImage: '/assets/images/content/slide2.jpg',
  //     //title: 'Image with title' //Optional: You can use this key if you want to show title
  // },{
  //     image: '/assets/images/content/slide3.jpg',
  //     thumbImage: '/assets/images/content/slide3.jpg',
  //     //title: 'Image with title' //Optional: You can use this key if you want to show title
  // }
  ];
  prevImageClick() {
      this.slider.prev();
  }

  nextImageClick() {
      this.slider.next();
  }

  // imageUrls: (string | IImage)[] = [
  //   { url: '/assets/images/bg_slide/Slide2.jpg' },
  //   // { url: '/assets/images/bg_slide/slide3.jpg' },
  //   // { url: '/assets/images/content/slide3.jpg' }
  // ];
  imageUrls = [
  //  { img: "/assets/images/bg_slide/slide1.jpg" },  
   // { img: "/assets/images/bg_slide/slide2.jpg" },
  ];
  public slideData:slideData[];
  constructor(private todoServcie:TodoService,private router:Router) { }
  @ViewChild('nav') slider: NgImageSliderComponent;
  public todoList:Todo[];
  public todoListReview:Todo[];
  options = {
    fullWidth: true
  };
  
  public login_status_check:any;
  ngOnInit() {
    if(localStorage.getItem("login")=="success"){
      this.login_status_check = '1';
    }
    // var elems = document.querySelectorAll('.carousel');
    // var instances = M.Carousel.init(elems,this.options);

    
    this.todoServcie.getTodoList(0).subscribe((response)=>{
     // console.log(response);
      this.todoList = response;
    });

    
    

    
    this.todoServcie.getSlide().subscribe((response)=>{
        var arraySlide = [];
        for(var i =0; i<response.length;i++){
          arraySlide.push({ img: '/upload/files/'+response[i].adjust_page_image_name+'.'+response[i].adjust_page_image_type+'?v=1.2' });
          //arraySlide.push({ url: '/upload/files/'+response[i].adjust_page_image_name+'.'+response[i].adjust_page_image_type+'?v=1.2' });
        }
        
      this.imageUrls = arraySlide;
    });
  }
  contentLoad(data) {
    if (data == 'deposit') {
        $("." + data).addClass('active');
        $(".withdraw").removeClass('active');
        $('.deposit_area').css('display', 'block');
        $('.withdraw_area').css('display', 'none');
    }
    if (data != 'deposit') {
      $(".withdraw").addClass('active');
      $(".deposit").removeClass('active');
      $('.deposit_area').css('display', 'none');
      $('.withdraw_area').css('display', 'block');
    }
};
 

  onSubmit(form: NgForm): void {
   if(!validURL(form.value.dp_link)){
    alert('url ไม่ถูกต้อง');
   }else{
    testHoldon('sk-circle','กำลังดึงข้อมูล');
     var get_data = "";
      var service = this.todoServcie;
      var image_link = this.image_link;
      var all_likes = this.all_likes;
      var all_comments = this.all_comments;
      var image_post = this.image_post;
      var post_message = this.post_message;
      service.getDataLink(form.value.dp_link).subscribe(data=>{
        if(data.status_link==false){
          alert('ไม่สามารถอ่านข้อมูลโพสที่ต้องการได้ อาจเป็นเพราะโพสที่ระบุไม่ใช่โพสสาธารณะ หรือURLอาจไม่ถูกต้อง');
          HoldOn.close();
        }else{
          service.saveLink(data[0]['data_text_like_and_share'][0],form.value.dp_link).subscribe(data2=>{
            //debugger;
            this.dp_id = data2.dp_id;
            this.image_link = data2.image_link;
            this.all_likes = data2.all_likes;
            this.all_comments =data2.all_comments;
            this.image_post =data2.image_link;
            this.post_message =data2.post_message;
            this.name_page =data2.dp_name_page;
            this.link_like =data2.dp_link_like;
            service.getDataLike_from_mysql(this.dp_id).subscribe(data3=>{
              localStorage.setItem('user_like',JSON.stringify(data3));
                this.data_user_like = data3;
            });
            service.getUserWin(this.dp_id).subscribe(data4=>{
                this.data_user_win = data4;
            });
            HoldOn.close();
          });
        }
      });
   } 
  //  testHoldon('sk-circle','กำลังดึงข้อมูล');

    
  }
  saveLike(data,data_id) {
   // debugger;
   testHoldon('sk-circle','กำลังเซฟข้อมูล');
    var link_like = $(data.currentTarget).attr("id");
    this.todoServcie.getDataLike(link_like,data_id).subscribe(data2=>{
      var data_id = data2.data_id;
      var string_array_user_like = JSON.stringify(data2.data_user_like);
      this.todoServcie.saveDataLike(data_id,string_array_user_like).subscribe(data3=>{
        this.todoServcie.getDataLike_from_mysql(this.dp_id).subscribe(data3=>{
          localStorage.setItem('user_like',JSON.stringify(data3));
            this.data_user_like = data3;
        });
       HoldOn.close();
      });
    });
  }

  randomUser(){
    console.log(localStorage.getItem('user_like'));
    var objArray = JSON.parse(localStorage.getItem('user_like'));
    var user_win = objArray[Math.floor(Math.random()*objArray.length)];
    console.log(user_win);
    //debugger;
    this.user_win = user_win.user_name;
    this.user_win_id = user_win.user_data;
  }

  onSubmitUserWin(form: NgForm): void {
   // debugger;
    this.todoServcie.saveUserWin(form.value.dp_id,form.value.user_win_id,form.value.user_win).subscribe(data=>{
      //debugger;
      this.todoServcie.getUserWin(form.value.dp_id).subscribe(data4=>{
        this.data_user_win = data4;
      });
    });
  };


  open_popup() {
   // const modalRef = this.modalService.open(NgbdModalContent);
   // modalRef.componentInstance.name = 'World';
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
  adjust_page_create_date:any;
  adjust_image:any;
}

interface slideData {
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

