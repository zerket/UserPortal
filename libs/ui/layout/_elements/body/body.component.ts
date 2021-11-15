import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input()
  platform = "portal";

}
