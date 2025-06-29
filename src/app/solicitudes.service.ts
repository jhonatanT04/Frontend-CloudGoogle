import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  private apiUrl = 'http://192.168.18.172:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPost(titulo: string, descripcion: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { titulo, descripcion });
  }

  getMsjServe(): Observable<any> {
    return this.http.get('http://192.168.18.172:3000/');
  }
}
