import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayElementToggler'
})
export class ArrayElementTogglerPipe implements PipeTransform {

  transform(inputArray: any[], element: any): any[] {
    const index = inputArray.findIndex(e=> JSON.stringify(element) === JSON.stringify(e))
    if (index === -1) {
        inputArray.push(element);
    } else {
        inputArray.splice(index, 1);
    }

    return inputArray
  }

}
