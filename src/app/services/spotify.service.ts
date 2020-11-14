import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token: string = 'Bearer BQCkP8TdNsDQKwqLxH_YuVagnWTCfHcOrgT1WD42y8n8PfEHrVwGfdYKh-RiNXebLI7M7Z3wsbpQrpnfBr8';

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
  getArtista( termino:string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));
  }
}
