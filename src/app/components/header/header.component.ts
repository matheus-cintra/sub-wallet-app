import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  appPages: any = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private sidenavService: SidenavService
  ) {}

  showSideNav() {
    this.sidenavService.toggle();
  }

  selectedItem(event: any) {
    this.router.navigate([event.link]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
