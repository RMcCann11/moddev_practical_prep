import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
//NOTE THIS WAS CODE FROM Handling of id passed by openDetails() to show personDetails i.e before API implementation
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people : Observable<any>;

  c//onstructor(private navController: NavController, private router: Router, private http: HttpClient) { }
  //NOTE THIS WAS CODE FROM Handling of id passed by openDetails() to show personDetails i.e before API implementation
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    //this.people = this.http.get('https://swapi.dev/api/people');
    //NOTE THIS WAS CODE FROM Handling of id passed by openDetails() to show personDetails i.e before API implementation
    this.people = this.api.getPeople();
  }

  openDetails(person) {
    let split = person.url.split('/');
    let personId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/people/${personId}`);
    }

}
