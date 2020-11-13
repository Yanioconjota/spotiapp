import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HttpGetExampleComponent } from './components/http-get-example/http-get-example.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'http', component: HttpGetExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];