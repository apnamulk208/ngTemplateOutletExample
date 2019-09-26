import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mymode = 'template';
  items = [
    {
      header: ' header Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'content The single responsibility principle...'
    },
    {
      header: ' header 2nd Reuseable Components with NgTemplateOutlet in Angular',
      content: 'content The single responsibility principle...'
    }
  ];
}
