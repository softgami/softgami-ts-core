import { Ng6Module } from './ng6.module';

describe('Ng6Module', () => {
  let ng6Module: Ng6Module;

  beforeEach(() => {
    ng6Module = new Ng6Module();
  });

  it('should create an instance', () => {
    expect(ng6Module).toBeTruthy();
  });
});
