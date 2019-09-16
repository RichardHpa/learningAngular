import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular crash todo list';
  name:string = 'Richard';

  constructor(){
      this.changename('Sam');
  }

  changename(name:string):void{
      this.name = name;
  }
}
