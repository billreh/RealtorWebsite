import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let cur: string = '' + value;
    let ret = '';
    for (let i = cur.length; i >= 1; i -= 3) {
      if (i === cur.length) {
         ret += cur.substring(i - 3, i);
      } else {
        ret = cur.substring(i - 3, i) + ',' + ret;
      }
    }
    return '$' + ret;
  }
}
