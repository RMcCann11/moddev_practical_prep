import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
//NOTE THIS WAS CODE FROM SLIDES 28 & 29 Show title of film & openDetails()
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films: Observable<any>;

  // constructor(private router: Router, private http: HttpClient) { }
  //NOTE THIS WAS CODE FROM SLIDES 28 & 29 Show title of film & openDetails()
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    // this.films = this.http.get('https://swapi.dev/api/films');
    // this.films.subscribe((data) => {
    //   console.log('my data: ', data);
    // });
    //NOTE THIS WAS CODE FROM SLIDE 25 TO DISPLAY DATA IN THE CONSOLE
    //this.films = this.http.get('https://swapi.dev/api/films');
    //NOTE THIS WAS CODE FROM SLIDES 28 & 29 Show title of film & openDetails()
    this.films = this.api.getFilms();
  }

  openDetails(film) {
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }

}
