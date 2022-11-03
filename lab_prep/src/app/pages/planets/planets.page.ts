import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
//NOTE THIS WAS CODE FROM Handling of id passed by openDetails() to show planetDetails i.e before API implementation
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets : Observable<any>;

  // constructor(private router: Router, private http: HttpClient) { }
  //NOTE THIS WAS CODE FROM Handling of id passed by openDetails() to show planetDetails i.e before API implementation
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    // this.planets = this.http.get('https://swapi.dev/api/planets');
    //NOTE THIS WAS CODE FROM Handling of id passed by openDetails() to show planetDetails i.e before API implementation
    this.planets = this.api.getPlanets();
  }

  openDetails(planet) {
    let split = planet.url.split('/');
    let planetId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/planets/${planetId}`);
    }

}
