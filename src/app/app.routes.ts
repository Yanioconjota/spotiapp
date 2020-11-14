import { Routes } from "@angular/router";
import { HttpGetExampleComponent } from './components/http-get-example/http-get-example.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistaComponent },
  { path: 'http', component: HttpGetExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];