import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_KEY = '75c2bb76933b4995ba27d29c4404c1bf';

  constructor(private httpClient: HttpClient) { }

  getNews(): Observable<any> {
    return this.httpClient.get(`https://newsapi.org/v2/everything?q=DevOps&sortBy=popularity&apiKey=${this.API_KEY}`);
  }
}
