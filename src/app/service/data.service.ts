import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_KEY = '4Jq3R9OjoQeZv8M5epZVg8lNDM';

  constructor(private httpClient: HttpClient) { }

  getNews() {

  }
}
