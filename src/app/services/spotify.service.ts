import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token: string = 'Bearer BQAjUHSMgVbLOKwl44NRRJ6WocU8ltL-XpuABC16CXk7VLW0b6FFCtCBQW5grVOrKKM5KzBf40zL1A5gS_Q';

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
