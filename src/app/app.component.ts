import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'child-app1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'app1';
}
