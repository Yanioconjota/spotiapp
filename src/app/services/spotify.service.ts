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
      'Authorization': 'Bearer BQBsc-K50YS-RvjTduIn_lcv-tqCZTDOwNAw-36GHWWp4SxHXyfwqkOgt4v1zzz6HYTGUWQaao-VjEIaEHKj8qtKLpBVeriFjq8RfyrJ7IbFOo0PACQ7eAO-RPdj_wMfQxl9mgjLPqhqo7tWvQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{ headers });  
  }
}
