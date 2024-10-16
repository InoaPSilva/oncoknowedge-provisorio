import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  private apiUrl = environment.apiUrl; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Function to send a POST request to the carcinoma API
  sendQuestion(question: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { question };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
