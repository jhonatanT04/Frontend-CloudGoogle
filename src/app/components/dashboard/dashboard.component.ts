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
  text: string = '';
  selectedFile: File | null = null;
  msjServe = '';
  constructor(private postService: SolicitudesService) {}

  ngOnInit() {
    this.cargarPosts();
  }

  cargarPosts() {
    this.postService.getPosts().subscribe(data => {
      
      this.posts = data;
    });
    this.servidorConsulta()
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  subirPost() {
    if (!this.text || !this.selectedFile) {
      alert('Debes ingresar texto y seleccionar una imagen.');
      return;
    }

    this.postService.addPost(this.text, this.selectedFile).subscribe(response => {
      console.log('Post creado:', response);
      this.text = '';
      this.selectedFile = null;
      this.cargarPosts();
    });
  }
  servidorConsulta(){
    this.postService.getMsjServe().subscribe(
      a => {
        this.msjServe = a.mensaje
      }
    )
  }
}
