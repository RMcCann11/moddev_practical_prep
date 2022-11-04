import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
//NOTE THIS WAS CODE FROM Handling of id passed by openDetails() to show personDetails i.e before API implementation
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.page.html',
  styleUrls: ['./person-details.page.scss'],
})
export class PersonDetailsPage implements OnInit {

  person: any;

  //constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
  //NOTE THIS WAS CODE FROM Handling of id passed by openDetails() to show personDetails i.e before API implementation
  constructor (private activatedRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.http.get(`https://swapi.dev/api/people/${id}`).subscribe(res => {
    // this.person = res;
    // });
    //NOTE THIS WAS CODE FROM Handling of id passed by openDetails() to show personDetails i.e before API implementation
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getPerson(id).subscribe(res => {
    this.person = res;
    });
  }

}
