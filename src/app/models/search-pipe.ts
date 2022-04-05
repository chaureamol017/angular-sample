import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
    transform(items: any[], attribute: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }

        if (!searchText) {
            return items;
        }

        return items.filter((item) => {
            return attribute.some((key) => this.filter(item[key], searchText));
        });
    }

    private filter(item: any, searchText: string): unknown {
        return String(item).toLowerCase().includes(searchText.toLowerCase());
    }
}
