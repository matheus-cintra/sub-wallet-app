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
  translate;

  constructor(private router: Router, translate: TranslateService) {
    this.translate = translate;
    const actualLang = localStorage.getItem('lang');
    if (!actualLang) {
      translate.setDefaultLang('pt-BR');
      this.setLang('pt-BR');
    } else {
      translate.setDefaultLang(actualLang);
      this.setLang(actualLang);
    }
  }

  changeLanguage() {
    switch (this.lang) {
      case 'pt-BR':
        this.setLang('en-US');
        break;

      case 'en-US':
        this.setLang('pt-BR');
        break;

      default:
        break;
    }
  }

  setLang(lang: string) {
    this.translate.use(lang);
    this.lang = lang;
    localStorage.setItem('lang', lang);
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
