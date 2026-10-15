const assert = require('node:assert/strict');
const test = require('node:test');

const config = require('../index.js');

test('exports a Commitlint configuration', () => {
  assert.equal(config.parserPreset, 'conventional-changelog-conventionalcommits');
  assert.ok(config.rules);
});

test('allows the documented commit types in lowercase', () => {
  assert.deepEqual(config.rules['type-enum'], [
    2,
    'always',
    [
      'build',
      'chore',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'revert',
      'style',
      'test',
    ],
  ]);
  assert.deepEqual(config.rules['type-case'], [2, 'always', 'lower-case']);
});

test('enforces subject and header conventions', () => {
  assert.deepEqual(config.rules['header-max-length'], [2, 'always', 100]);
  assert.deepEqual(config.rules['subject-empty'], [2, 'never']);
  assert.deepEqual(config.rules['subject-full-stop'], [2, 'never', '.']);
});
