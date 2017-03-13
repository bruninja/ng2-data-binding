import { Component } from 'angular2/core';

@Component({
  selector:    'aplicativo',
  templateUrl: 'app/view.html'
})

export class AppComponent {
  title:string = "Meu primeiro aplicativo Angular 2";
  name:string = "Mundo";
}
