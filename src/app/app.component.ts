import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My ANG2 APP';
  color:string="lime";
  theme:string="light-version";
  concepts:string[]=['Component',
'App Structure',
'Directives',
'Attribute directives',
'Structural Directives'];

  changeColor(){
    
    let colors:string[]=
    ['yellow','tomato','lime','lightgreen',
    'orange'];
    this.color=colors[Math.floor(Math.random()*5)];
  }
}
