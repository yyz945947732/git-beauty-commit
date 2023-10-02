import transform from '../src';
import { describe, it, expect } from 'vitest';

describe('git-beauty-commit', () => {
  it('capitalize', () => {
    expect(transform('doc update GitHub link')).eq('Doc update GitHub link');
  });
  it('emoji', () => {
    expect(transform('docs: doc update GitHub link')).eq(
      '📖 Doc update GitHub link'
    );
    expect(transform('docs:doc update GitHub link')).eq(
      '📖 Doc update GitHub link'
    );
    expect(transform('doc: doc update GitHub link')).eq(
      '📖 Doc update GitHub link'
    );
    expect(transform('chore: 1.0.0')).eq('🚀 1.0.0');
    expect(transform('fix: input should be ahead of select (#3373)')).eq(
      '🐛 Input should be ahead of select (#3373)'
    );
    expect(transform('custom: no this type')).eq('custom: No this type');
  });
  it('scope', () => {
    expect(transform('fix(Input): fix focus bug')).eq(
      '🐛(Input): Fix focus bug'
    );
  });
});
