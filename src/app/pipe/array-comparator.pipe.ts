import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayComparator'
})
export class ArrayComparatorPipe implements PipeTransform {

  transform(existing: any[], updated: any[]): boolean {
    return existing.length === updated.length && updated.every((es) => {
      return existing.some(s => JSON.stringify(es) === JSON.stringify(s));
  });
  }

}
