import { TestBed, inject } from '@angular/core/testing';

import { SoftgamiTsCoreService } from './softgami-ts-core.service';

describe('SoftgamiTsCoreService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [SoftgamiTsCoreService]
        });
    });

    it('should be created', inject([SoftgamiTsCoreService], (service: SoftgamiTsCoreService) => {
        expect(service).toBeTruthy();
    }));
});
