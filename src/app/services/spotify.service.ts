import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token: string = 'Bearer BQDBQX8INTRSrPJxkNJlJ5cdvwjtkbvFC5QQMpc4uWb98w3UU6xIRyWunK9cRu9-2oO3w3SRMo5LVd8c3DA';

  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }

  getQuery(query:string){
    const url: string = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': `${this.token}`
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));
  }
  getArtistas( termino:string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
      //.pipe(map(data => data['artists'].items));
  }
}
