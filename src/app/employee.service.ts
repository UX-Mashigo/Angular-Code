import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { IEmployee } from './employee';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string= "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  //initializing and return employees list
 getEmployees(): Observable<IEmployee[]>{
   return this.http.get<IEmployee[]>(this._url)
                    .catch(this.errorHandler);
 }
 errorHandler(error:HttpErrorResponse){
      return Observable.throw(error.message ||"Server Error");
       
  }
}
