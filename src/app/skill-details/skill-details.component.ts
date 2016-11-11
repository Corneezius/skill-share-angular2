import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseDataService } from '../firebase-data.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-skill-details',
  providers: [FirebaseDataService],
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {

  constructor(
    public dataService: FirebaseDataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}
  skills: FirebaseListObservable<any[]>;
  skill: FirebaseObjectObservable<any>;
  users: FirebaseListObservable<any[]>;
  userObjects = [];
  id: number;

  ngOnInit() {
    this.getDataFromService();
  }
  getDataFromService() {
    this.route.params.forEach((urlParametersArray) => {
      this.id = parseInt(urlParametersArray['id']);
    });
    this.users = this.dataService.getUsers();
    this.skill = this.dataService.goToSingleSkill(this.id);
    // this.users.subscribe(function(snapshot) {
    //   this.userObjects = snapshot;
    // });
    console.log(this.skill);
  }
  goToUserDetail(userObject) {
    console.log(userObject);
    this.router.navigate(['users', userObject.$key]);
  }
}
