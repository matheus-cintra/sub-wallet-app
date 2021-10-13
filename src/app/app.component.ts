import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'subscription-wallet';
  lang = 'pt-BR';
  authenticated = false;
  translate;

  constructor(private router: Router, translate: TranslateService) {
    this.translate = translate;
    const actualLang = localStorage.getItem('lang');
    if (!actualLang) {
      translate.setDefaultLang('pt-BR');
    } else {
      translate.setDefaultLang(actualLang);
    }
  }

  changeLanguage() {
    switch (this.lang) {
      case 'pt-BR':
        this.translate.use('en-US');
        this.lang = 'en-US';
        break;

      case 'en-US':
        this.translate.use('pt-BR');
        this.lang = 'pt-BR';
        break;

      default:
        break;
    }
  }

  showHeader() {
    const routesWithoutHeader = ['/login'];
    return !routesWithoutHeader.includes(this.router.url);
  }

  showSideNav() {
    const routesWithoutSideNav = ['/login'];
    return !routesWithoutSideNav.includes(this.router.url);
  }
}
