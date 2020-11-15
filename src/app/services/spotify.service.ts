import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token: string = 'Bearer BQDvRRkLRDMURQOMYknQrQwKCan5TeLe2GGLPCinev3OOg6ELp2fc6bTFxa6hvHMYYgf1OlyJcQf1y7Gfw8';

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
