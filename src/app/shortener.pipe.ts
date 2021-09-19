import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortener'
})
export class ShortenerPipe implements PipeTransform {

  transform(value: any, upto: any = 1): any {
    return value.slice(0, upto);
  }

}
