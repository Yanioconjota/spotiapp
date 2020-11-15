import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;
  error: boolean;
  errorMsg: string;

  constructor(private spotify: SpotifyService) { }

  buscar(termino:string) {
    console.log(termino);
    this.loading = true;
    this.spotify.getArtistas( termino )
    .subscribe((data: any) => {
        this.artistas = data;
        console.log(data);
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
