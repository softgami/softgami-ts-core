
export class SoftgamiTsUtilsService {

    resolveObjectPath<T>(obj: any, path: string): T {

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

}
