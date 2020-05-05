import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private _authService:AuthService, private _router:Router){}
  private statusWebsite = true;
  canActivate(): boolean  {
    this._authService.checkStatus().subscribe((response)=>{
      if(response.website_status=='1'){
       this.statusWebsite = true;
       localStorage.setItem('web_status',"1");
      }else{
       this.statusWebsite = false;
      }
      
      // return response.website_status;
     });
    if(this.statusWebsite&&localStorage.getItem('web_status')!='2'){
      
      return true;
    }else{
      localStorage.setItem('web_status',"2");
      this._router.navigate(['/404']);
      return false;
    }
    
  }
  
}
