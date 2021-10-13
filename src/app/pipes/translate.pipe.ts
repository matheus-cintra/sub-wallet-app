import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translate/translate.service';

@Pipe({
  name: 'translation',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(value: any, args?: any): any {
    return this.translationService.translate(value);
  }
}
