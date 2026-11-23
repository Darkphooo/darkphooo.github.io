import assert from 'node:assert/strict'
import { test } from 'node:test'
import { birthday, elapsedSinceBirth } from '../src/time.js'

test('elapsed time uses the original China timezone and rolls over each unit', () => {
  assert.equal(birthday, Date.UTC(1994, 8, 7, 13, 42))
  assert.deepEqual(elapsedSinceBirth(birthday), ['00', '00', '00', '00'])
  assert.deepEqual(elapsedSinceBirth(birthday - 1000), ['00', '00', '00', '00'])
  assert.deepEqual(elapsedSinceBirth(birthday + 90061000), ['01', '01', '01', '01'])
  assert.deepEqual(elapsedSinceBirth(birthday + 86400000), ['01', '00', '00', '00'])
})
