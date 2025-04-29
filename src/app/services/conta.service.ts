import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  constructor(private http: HttpClient) { }

  private readonly apiUrl = 'http://localhost:8080/'; // Adicionei http://

  criarConta(name: string): Observable<any> { // Mudei String para string (TypeScript)
    const body = { name: name }; // Padronizei a formatação
    return this.http.post(`http://localhost:8080/accounts/`, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}