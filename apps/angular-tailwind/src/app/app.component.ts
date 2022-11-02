import { Component } from '@angular/core';

@Component({
  selector: 'angled-wind-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-tailwind';
  isOn = false;

  testButton() {
    this.isOn = !this.isOn;
  }
}
