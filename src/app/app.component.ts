import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular ToDo List';

  constructor() {
    console.log("Initializing megacondenser. . .")
    this.changeTitle("Hello, world!")
  }

  changeTitle(title: string): void {
    this.title = title;
  }
}
