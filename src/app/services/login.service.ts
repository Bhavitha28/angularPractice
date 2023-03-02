import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject,BehaviorSubject, Observable  } from 'rxjs';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

public loginStatusSubject=new Subject<boolean>();
userLoginSubject=new BehaviorSubject(false);
  constructor(private http:HttpClient) { }


//current user: which is loggedin

// public getCurrentUser(username:any){
//   console.log(username)
//   return this.http.get('http://localhost:8080/user/getByUsername/'+username);
// }


  public login (loginData:any){

    console.log(loginData.userName,loginData.password);

    return this.http.post('http://localhost:8080/user/login',loginData);
    
  }

  public signup(signupData:any):Observable<any>{
    console.log(signupData)
    return this.http.post('http://localhost:8080/user/Signup',signupData);

  }

  public getOneUser(id: any){
    return this.http.get('http://localhost:8080/user/getOneUser/'+id);
  }

  
  public updateUser(updateuser: any){
    return this.http.put('http://localhost:8080/user/updateUser/',updateuser);

  }
}
