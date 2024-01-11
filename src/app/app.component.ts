import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    class: "h-full"
  }
})
export class AppComponent {
  title = 'CarLink';
}
