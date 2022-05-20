import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(items: any[], attribute: any[], searchText: string): any[] {
    if (!items) {
        return [];
    }

    if (!searchText) {
        return items;
    }

    const filtered: any[] = items.filter((item) => {
        return attribute.some((key) => this.filter(item[key], searchText));
    });
    return filtered;
}

private filter(item: any, searchText: string): unknown {
    return String(item).toLowerCase().includes(searchText.toLowerCase());
}
}
