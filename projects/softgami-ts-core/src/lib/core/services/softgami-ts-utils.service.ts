/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export abstract class SoftgamiTsUtilsService {

    static resolveObjectPath<T>(obj: any, path: string): T | undefined {

        if (obj === null || obj === undefined) return undefined;
        if (path === null || path === undefined) return undefined;

        const splittedPath: string[] = path.split('.');

        if (splittedPath.length === 1 && splittedPath[0] === '') {

            return obj;

        }

        const result: T = splittedPath.reduce((prev, curr) => {

            return prev ? prev[curr] : undefined;

        }, obj);

        return result;

    }

    static truncateDecimals(inputNumber: number, digits: number): number {

        const multiplier: number = Math.pow(10, digits);
        const adjustedNum: number = inputNumber * multiplier;
        const truncatedNum: number = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

        return truncatedNum / multiplier;

    }

}
