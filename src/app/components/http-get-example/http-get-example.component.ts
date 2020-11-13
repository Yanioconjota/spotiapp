import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-get-example',
  templateUrl: './http-get-example.component.html',
  styles: [
  ]
})
export class HttpGetExampleComponent implements OnInit {

  paises: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((resp: any) => {
        this.paises = resp;
        console.log(resp);
      });
  }

  ngOnInit(): void {
  }

}
