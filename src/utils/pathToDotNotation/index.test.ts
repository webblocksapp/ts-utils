import { pathToDotNotation } from '@utils';

describe('pathToDotNotation', () => {
  it('formats brackets path notation to dots', () => {
    expect(pathToDotNotation('[0].key1')).toBe('0.key1');
    expect(pathToDotNotation('["0"].key1[2]')).toBe('0.key1.2');
    expect(pathToDotNotation('[0]["1"].key1["3"][2].key5')).toBe('0.1.key1.3.2.key5');
  });
});
