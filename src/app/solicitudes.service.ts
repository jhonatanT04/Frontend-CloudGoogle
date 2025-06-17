import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  private apiUrl = 'http://34.111.171.73/api/posts';

  constructor(private http: HttpClient) { }


  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  addPost(contenedor: string, imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append('contenedor', contenedor);
    formData.append('imagen', imagen);

    return this.http.post<any>(this.apiUrl, formData);
  }
  getMsjServe(): Observable<any> {
    return this.http.get('http://34.111.171.73/api/saludo');
  }


}