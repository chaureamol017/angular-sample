import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }


  filterByKeys(items: any[], keys: any[], searchText: string): any[] {
    if (!items || !searchText) {
        return items;
    }

    return items.filter((item) => {
        return keys.some((key) => this.filter(item[key], searchText));
    });
  }

  private filter(item: any, searchText: string): unknown {
      return String(item).toLowerCase().includes(searchText.toLowerCase());
  }
}
