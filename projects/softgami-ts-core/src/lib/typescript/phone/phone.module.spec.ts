import { PhoneModule } from './phone.module';

describe('PhoneModule', () => {
  let phoneModule: PhoneModule;

  beforeEach(() => {
    phoneModule = new PhoneModule();
  });

  it('should create an instance', () => {
    expect(phoneModule).toBeTruthy();
  });
});
