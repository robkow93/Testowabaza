//root component
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  //These styles apply only to the AppComponent and don't affect the outer HTML.
  //template: '<child-app></child-app> ',
})


export class AppComponent{
  
    title = 'Tour of Heroes';
  
}
