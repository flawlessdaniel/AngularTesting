import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: number[], asc: boolean = true): number[] {
    return value.sort((a, b) => asc ? a - b : b - a);
  }

}
