import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token: string = 'Bearer BQCRRRg9RuJDOIiqrRZ1q8T8CinlbJOZJTxgFBRujuUautOHKIo7hMwDPHTTlHbJ9SdI-lnaN3Rtt5Qe5bM2';

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
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
      .pipe(map(data => data['tracks']));
  }
}
