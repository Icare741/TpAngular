import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public objectToShare: Observable<Object>
  constructor(private http : HttpClient) {
    this.objectToShare = this.http.get('http://localhost:3000/users')
   }

}
