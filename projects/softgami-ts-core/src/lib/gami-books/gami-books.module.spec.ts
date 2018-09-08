import { GamiBooksModule } from './gami-books.module';

describe('GamiBooksModule', () => {
    let gamiBooksModule: GamiBooksModule;

    beforeEach(() => {
        gamiBooksModule = new GamiBooksModule();
    });

    it('should create an instance', () => {
        expect(gamiBooksModule).toBeTruthy();
    });
});
