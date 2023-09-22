import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'ma-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  list: any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    const respuesta = this.moviesService.get();

    respuesta.subscribe({
      next: (listado: any[]) => {
        this.list = listado;
      },
      error: (err) => {
        alert('Servicio no disponible')
      },
    });
  }

}
