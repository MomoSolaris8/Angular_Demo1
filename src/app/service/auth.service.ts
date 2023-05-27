import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiurl='http://localhost:3000/users'; // local json server

  GetAll(){
    return this.http.get(this.apiurl);
  }

  // get user by id
  Getbycode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }

  
// create user
  Proceedregister(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }

  // update user
 Updateuser(inputdata:any){
    return this.http.put(this.apiurl,inputdata);
  }


}
