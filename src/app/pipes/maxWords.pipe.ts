import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxWords'
})
export class MaxWordsPipe implements PipeTransform {

  transform(value: any, maxWords?: any): any {
    const arr = value.split(' ')
    if(arr.length > maxWords){
      return arr.slice(0, maxWords).join(' ') + '...'
    }
    return value;
  }

}
