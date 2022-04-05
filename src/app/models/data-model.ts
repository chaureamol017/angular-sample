
export interface StoreData {
    id: number;
    name: string;
    selected: boolean;
}

export class MultiSelectData {
    id: number;
    name: string;
    selected: boolean;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.selected = false;
    }

    getLabelText() {
        return this.name;
    }

}