import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslationService {
  private translateKeys: any = [];
  private lang: string;

  constructor(private translateService: TranslateService) {}

  async setCollection(tableName: any, lang: string) {
    this.translateKeys = {};
    this.lang = lang;
    const translates = await this.translateService.get(tableName).toPromise();
    this.translateKeys = translates;
    // if (typeof tableName === 'string') {
    //   const translations = await this.translateService
    //     .get(tableName)
    //     .toPromise();

    //   this.translateKeys = { ...translations };
    // }
    // if (typeof tableName === 'object') {
    //   for (const item of tableName) {
    //     const translations = await this.translateService.get(item).toPromise();
    //     this.translateKeys = { ...translations, ...this.translateKeys };
    //   }
    // }
  }

  translate(value: string): string {
    console.warn('TRADUZIDO > ', this.translateKeys[value]);

    return this.translateKeys[value];
  }
}
