import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Component, inject, OnInit,signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../core/services/account-service';
import { Home } from "../features/home/home";
import { User } from '../types/user';

@Component({
  selector: 'app-root',
  imports: [Nav, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
private accountService=inject(AccountService);
private http= inject(HttpClient);
protected title = 'Dating App';
protected members= signal<User[]>([])

 async ngOnInit() {
    // this.members.set(await this.getMembers());
    this.SetCurrentUser();
  }
  
  SetCurrentUser()
  {
    const userString=localStorage.getItem('User');
    if(!userString) return;
    const user=JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }
 async getMembers()
  {
    try {
      return  firstValueFrom(this.http.get<User[]>("https://localhost:5001/api/members"));
    } catch (error) {
      console.log(error);
      throw error;
    }
     
  }


}
