
export enum OPERATION { APPLY, CANCEL }

export interface SelectionConfig {
    availableVSItemSize?: string;
    selectedVSItemSize?: string;
}

export interface Selection<T> {
    available: T[];
    selected: T[];
    removed?: T[];
    operation?: OPERATION;
    attribute: string[];
    title?: string;
    config?: SelectionConfig;
    icon?: string;
    selectedIcon?: any;
}
