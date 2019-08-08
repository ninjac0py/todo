import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = "https://apitest.smbssolutions.com/public/api/v1/tasks";
  headers = null
  constructor(private http:HttpClient) {
    this.headers = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4IiwiZW1haWwiOiJ0ZXN0QHVzZXIuY29tIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTU2NTI4NjY1OCwiZXhwIjoxNTY1ODkxNDU4fQ.iXkPOgpuj-ypluM_YvZTCkjyJXhf1hHwETDg3lS1KZ0",
      "Content-Type": "application/json"
    }
  }
  
  private request(method:string="get", tid:number=null){
    let url = tid ? `${this.url}/${tid}` : this.url;
    return this.http[method.toLocaleLowerCase()](url)
  }
  
  get(tid:string=null){
    let url = tid ? `${this.url}/${tid}` : this.url;
    return this.http.get(url,{headers: this.headers});
  }

  delete(tid:string){
    return this.http.delete(`${this.url}/${tid}`, {headers: this.headers});
  }
  
  create(data){
    return this.http.post(this.url, data, {headers:this.headers});
  }

}
