import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements OnInit, AfterViewInit {
  appPages: any = [];

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(
    private router: Router,
    private http: HttpClient,
    private sidenavService: SidenavService
  ) {}

  ngOnInit() {
    this.initMenu();
  }

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

  selectedItem(event: any) {
    this.router.navigate([event.link]);
  }

  async initMenu() {
    const result: any = await this.http
      .get('./assets/json/menu.json')
      .toPromise();

    this.appPages = result;

    console.warn('result', result);
  }
}
