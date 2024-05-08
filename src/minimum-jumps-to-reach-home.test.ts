import { describe, expect, test } from 'vitest'
import minimumJumps from './minimum-jumps-to-reach-home'

describe('should', () => {
  test('exported', () => {
    expect(minimumJumps([14, 4, 18, 1, 15], 3, 15, 9)).toBe(3)
  })
  test('exported', () => {
    expect(minimumJumps([1, 6, 2, 14, 5, 17, 4], 16, 9, 7)).toBe(2)
  })
  test('exported', () => {
    expect(
      minimumJumps(
        [
          162, 118, 178, 152, 167, 100, 40, 74, 199, 186, 26, 73, 200, 127, 30, 124, 193, 84, 184, 36, 103, 149, 153, 9, 54, 154, 133, 95, 45, 198, 79, 157, 64, 122, 59, 71, 48, 177, 82, 35, 14, 176,
          16, 108, 111, 6, 168, 31, 134, 164, 136, 72, 98,
        ],
        29,
        98,
        80,
      ),
    ).toBe(121)
  })
})
