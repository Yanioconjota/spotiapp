import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  errorMsg: any;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotifyService.getNewReleases()
    .subscribe( (data: any) =>{
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    },
      (errorServicio) => {
        this.loading = false;
        this.error = true;
        this.errorMsg = errorServicio.error.error.message;
        console.log(this.errorMsg);
      });
  }

}
