export interface CompoundIndexOption {
    fields: any;
    options?: {
        expires?: string;
        [other: string]: any;
    };
}
