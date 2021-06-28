import { SoftgamiTsUtilsService } from './softgami-ts-utils.service';

describe('SoftgamiTsUtilsService', () => {

    describe('resolveObjectPath', () => {

        test('resolveObjectPath should return undefined when object is null', () => {

            const result: string | undefined = SoftgamiTsUtilsService.resolveObjectPath<string>(null, '');

            expect(result).toBe(undefined);

        });

        test('resolveObjectPath should return undefined when object is undefined', () => {

            const result: string | undefined = SoftgamiTsUtilsService.resolveObjectPath<string>(undefined, '');

            expect(result).toBe(undefined);

        });

        test('resolveObjectPath should return undefined when path is null', () => {

            const result: string | undefined = SoftgamiTsUtilsService.resolveObjectPath<string>({}, null);

            expect(result).toBe(undefined);

        });

        test('resolveObjectPath should return undefined when path is undefined', () => {

            const result: string | undefined = SoftgamiTsUtilsService.resolveObjectPath<string>({}, undefined);

            expect(result).toBe(undefined);

        });

        test('resolveObjectPath should return "some value" when object and path "value"', () => {

            const obj = { value: 'some value' };
            const result: string | undefined = SoftgamiTsUtilsService.resolveObjectPath<string>(obj, 'value');

            expect(result).toBe('some value');

        });

        test('resolveObjectPath should return "some value" when object string and path ""', () => {

            const obj = 'some value';
            const result: string | undefined = SoftgamiTsUtilsService.resolveObjectPath<string>(obj, '');

            expect(result).toBe('some value');

        });

        test('resolveObjectPath should return true when object boolean and path ""', () => {

            const obj = true;
            const result: boolean | undefined = SoftgamiTsUtilsService.resolveObjectPath<boolean>(obj, '');

            expect(result).toBe(true);

        });

        test('resolveObjectPath should return number when object number and path ""', () => {

            const obj = 10;
            const result: number | undefined = SoftgamiTsUtilsService.resolveObjectPath<number>(obj, '');

            expect(result).toEqual(10);

        });

        test('resolveObjectPath should return "some value content" when object and path "value.content"', () => {

            const obj = {
                value: {
                    content: 'some value content',
                },
            };
            const result: string | undefined = SoftgamiTsUtilsService.resolveObjectPath<string>(obj, 'value.content');

            expect(result).toBe('some value content');

        });

        test('resolveObjectPath should return "some another value content" when object and path "value.content.another"', () => {

            const obj = {
                value: {
                    content: {
                        another: 'some another value content',
                    },
                },
            };
            const result: string | undefined = SoftgamiTsUtilsService.resolveObjectPath<string>(obj, 'value.content.another');

            expect(result).toBe('some another value content');

        });

        test('resolveObjectPath should return undefined when object and path doesnt exists in object', () => {

            const obj = {
                value: {
                    content: {
                        another: 'some another value content',
                    },
                },
            };
            const result: string | undefined = SoftgamiTsUtilsService.resolveObjectPath<string>(obj, 'value.content.incorret.path');

            expect(result).toBeUndefined();

        });

    });

    describe('truncateDecimals', () => {

        describe('when input number is 0', () => {

            test('truncateDecimals should return 0 when input number is 0 and digits is positive', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(0, 1)).toBe(0);

            });

            test('truncateDecimals should return 0 when input number is 0 and digits is 0', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(0, 0)).toBe(0);

            });

            test('truncateDecimals should return 0 when input number is 0 and digits is negative', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(0, -1)).toBe(0);

            });

        });

        describe('when input number is positive', () => {

            test('truncateDecimals should return 2.2 when input number is 2.204 and last digit is less than 5 and digits is positive', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(2.204, 2)).toBe(2.2);

            });

            test('truncateDecimals should return 2 when input number is 2.204 and last digit is less than 5 and digits is 0', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(2.204, 0)).toBe(2);

            });

            test('truncateDecimals should return 0 when input number is 2.204 and last digit is less than 5 and digits is negative', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(2.204, -1)).toBe(0);

            });

            test('truncateDecimals should return 2.29 when input number is 2.291 and last digit is less than 5 and digits is positive', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(2.291, 2)).toBe(2.29);

            });

            test('truncateDecimals should return 2.29 when input number is 2.299 and last digit is greater than 5 and digits is positive', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(2.299, 2)).toBe(2.29);

            });

            test('truncateDecimals should return 2 when input number is 2.291 and last digit is less than 5 and digits is 0', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(2.291, 0)).toBe(2);

            });

            test('truncateDecimals should return 0 when input number is 2.291 and last digit is less than 5 and digits is negative', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(2.291, -1)).toBe(0);

            });

            test('truncateDecimals should return 0.29 when input number is 0.299 and last digit is greater than 5 and digits is positive', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(0.299, 2)).toBe(0.29);

            });

        });

        describe('when input number is negative', () => {

            test('truncateDecimals should return -2.2 when input number is -2.204 and last digit is less than 5 and digits is positive', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(-2.204, 2)).toBe(-2.2);

            });

            test('truncateDecimals should return -2 when input number is -2.204 and last digit is less than 5 and digits is 0', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(-2.204, 0)).toBe(-2);

            });

            test('truncateDecimals should return -0 when input number is -2.204 and last digit is less than 5 and digits is negative', () => {

                expect(SoftgamiTsUtilsService.truncateDecimals(-2.204, -1)).toBe(-0);

            });

        });

    });

});
