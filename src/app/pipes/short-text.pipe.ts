import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText',
})
export class ShortTextPipe implements PipeTransform {
  transform(text: string, length: number = 20): unknown {
    if (text.length > length) {
      return text.substring(0, length - 3) + '...';
    }
    return text;
  }
}
