import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'searchByTitle'
})
export class SearchByTitlePipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    return value.filter((item:Product) => item.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
