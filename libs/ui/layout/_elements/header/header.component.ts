import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockRouteService, RemoteComponent } from '@uzo/shared/utils';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDetailsWidget!: RemoteComponent;

  constructor(
    private router: Router,
    private lookupService: MockRouteService) { }

  async ngOnInit() {
    this.userDetailsWidget = await this.lookupService.getPatientDetailTopbarWidgets();
  }

  public onSetTheme(theme: string) {
    if (document.body.classList.contains('theme-primary')) {
      document.body.classList.remove('theme-primary');
    } 
    if (document.body.classList.contains('theme-dark')) {
      document.body.classList.remove('theme-dark');
    }
    document.body.classList.add(theme);
  }
}
