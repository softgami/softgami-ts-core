import { DomainModule } from './domain.module';

describe('DomainModule', () => {
  let domainModule: DomainModule;

  beforeEach(() => {
    domainModule = new DomainModule();
  });

  it('should create an instance', () => {
    expect(domainModule).toBeTruthy();
  });
});
