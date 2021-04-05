/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CompoundIndexOption {
    fields: any;
    options?: {
        expires?: string;
        [other: string]: any;
    };
}
