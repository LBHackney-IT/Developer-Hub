import { OrderApisAlphabeticallyPipe } from './order-apis-alphabetically.pipe';
import { generateTestApis } from '../../testing/mock-db';

describe('OrderApisAlphabeticallyPipe', () => {
  let pipe: OrderApisAlphabeticallyPipe;
  beforeEach(() => {
    pipe = new OrderApisAlphabeticallyPipe();
  });

  it('create an instance', () => {
    // const pipe = new OrderApisAlphabeticallyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort title alphabetically', () => {
    const result = pipe.transform(generateTestApis(4));
    expect(result[0].title.charCodeAt(0)).toBeLessThan(result[3].title.charCodeAt(0));
  });
});
