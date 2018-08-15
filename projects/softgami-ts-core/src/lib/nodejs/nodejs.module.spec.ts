import { NodejsModule } from './nodejs.module';

describe('NodejsModule', () => {
  let nodejsModule: NodejsModule;

  beforeEach(() => {
    nodejsModule = new NodejsModule();
  });

  it('should create an instance', () => {
    expect(nodejsModule).toBeTruthy();
  });
});
