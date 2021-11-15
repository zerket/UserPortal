import { Component } from '@angular/core';

@Component({
  selector: 'core-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent {
  loading = true;
  src = `${window.location.protocol}//${window.location.hostname}`;

  onLoaded() {
    this.loading = false;
  }
}
