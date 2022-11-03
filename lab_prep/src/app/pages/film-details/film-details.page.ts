import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  //filmId = null;
  //Part of Capturing a value passed by URL - WK 4 Slide 25

  film: any;
  
  // constructor(private activatedRoute: ActivatedRoute) { }
  //Part of Capturing a value passed by URL - WK 4 Slide 25

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    //this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    //Part of Capturing a value passed by URL - WK 4 Slide 25
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.dev/api/films/${id}`).subscribe((res) => {
      this.film = res;
    });
  }

}
