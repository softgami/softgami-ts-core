import { TypescriptModule } from './typescript.module';

describe('TypescriptModule', () => {
    let typescriptModule: TypescriptModule;

    beforeEach(() => {
        typescriptModule = new TypescriptModule();
    });

    it('should create an instance', () => {
        expect(typescriptModule).toBeTruthy();
    });
});
