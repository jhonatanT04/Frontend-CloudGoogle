import { Component } from '@angular/core';

import { SolicitudesService } from '../../solicitudes.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  posts: any[] = [];
  titulo: string = '';
  descripcion: string = '';
  msjServe = '';

  constructor(private postService: SolicitudesService) {}

  ngOnInit() {
    this.cargarPosts();
  }

  cargarPosts() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
    this.servidorConsulta();
  }

  subirPost() {
    if (!this.titulo || !this.descripcion) {
      alert('Debes ingresar un título y una descripción.');
      return;
    }

    this.postService.addPost(this.titulo, this.descripcion).subscribe(response => {
      console.log('Post creado:', response);
      this.titulo = '';
      this.descripcion = '';
      this.cargarPosts();
    });
  }

  servidorConsulta() {
    this.postService.getMsjServe().subscribe(
      a => {
        this.msjServe = a.mensaje;
        console.log(this.msjServe);
      }
    );
  }
}
