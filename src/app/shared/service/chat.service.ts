import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  private apiUrl = 'https://cancer-pele-479228751358.southamerica-east1.run.app/cancer_pele'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Function to send a POST request to the carcinoma API
  sendQuestion(question: string, contexto: string, session_id: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { question, contexto, session_id };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
