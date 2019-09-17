import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular crash todo list';
  name:string = 'Richard';

  // The constructor will run before it gets rendered on the screen
  constructor(){
      this.changename('Sam');
  }

  // void means nothing will be returned
  changename(name:string):void{
      this.name = name;
  }
}
