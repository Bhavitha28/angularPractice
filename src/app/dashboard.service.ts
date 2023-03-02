
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  public  getAllUsers(){
    return this.http.get('http://localhost:8080/user/getAllUsers');
  }
  public deleteUser(id: any):Observable<{}>{

    return this.http.delete(`http://localhost:8080/user/deleteUser?id=${id}`)
    .pipe(catchError(this.handleError));

   } 
   
   public undoDelete(id: any){
    return this.http.get(`http://localhost:8080/user/undoDelete?id=${id}`);

  }


  public getOneUser(id: any){
    return this.http.get('http://localhost:8080/user/getOneUser/'+id);

  }

  public updateUser(updateuser: any){
    return this.http.put('http://localhost:8080/user/updateUser/',updateuser);

  }


  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  
}
