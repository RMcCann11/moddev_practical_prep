import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
//NOTE THIS WAS CODE FROM Handling of id passed by openDetails() to show planetDetails i.e before API implementation
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.page.html',
  styleUrls: ['./planet-details.page.scss'],
})
export class PlanetDetailsPage implements OnInit {

  planet: any;

  //constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
  //NOTE THIS WAS CODE FROM Handling of id passed by openDetails() to show planetDetails i.e before API implementation
  constructor (private activatedRoute: ActivatedRoute, private api: ApiService) {}


  ngOnInit() {
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.http.get(`https://swapi.dev/api/planets/${id}`).subscribe(res => {
    // this.planet = res;
    // });
    //NOTE THIS WAS CODE FROM Handling of id passed by openDetails() to show planetDetails i.e before API implementation
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getPlanet(id).subscribe(res => {
    this.planet = res;
    });
  }

}
