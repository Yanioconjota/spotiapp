import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBHdVPpeXVeAHqdujppbPvJs_4Uy9FswnIz4DMSPUhI3obnA7Eb0xD235aqkTd9hC5E94zvHd5-w3IZW-A'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{ headers });
  }
  getArtista( termino:string ) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBHdVPpeXVeAHqdujppbPvJs_4Uy9FswnIz4DMSPUhI3obnA7Eb0xD235aqkTd9hC5E94zvHd5-w3IZW-A'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}
