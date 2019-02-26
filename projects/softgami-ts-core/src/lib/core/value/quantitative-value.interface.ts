import { UnityValue } from './unity-value.interface';

export interface QuantitativeValue {
    value: number;
    unityValue: UnityValue;
    description?: string;
    maxValue?: number;
    minValue?: number;
    validFrom?: Date;
    validThrough?: Date;
}
