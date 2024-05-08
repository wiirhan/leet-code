import { describe, expect, test } from 'vitest'
import countServers from './countServers'

describe('should', () => {
  test('exported', () => {
    expect(
      countServers([
        [1, 0],
        [0, 1],
      ]),
    ).toBe(0)
    expect(
      countServers([
        [1, 0],
        [1, 1],
      ]),
    ).toBe(3)
    expect(
      countServers([
        [1, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ]),
    ).toBe(4)
  })
})
