import { Injectable } from '@angular/core';
import {User} from '../shared/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
user:User;
  constructor() { }
  ngOnInit() {
    
  }
}
