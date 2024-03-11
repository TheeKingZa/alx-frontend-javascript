// 8-clean_set.test.js
/* eslint-disable jest/prefer-expect-assertions */

import cleanSet from './8-clean_set';

describe('cleanSet', () => {
  it('should return a string of all the set values that start with a specific string', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    expect(cleanSet(set, 'bon')).toBe('jovi-aparte-appetit');
  });

  it('should return an empty string if startString is an empty string', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    expect(cleanSet(set, '')).toBe('');
  });
});
