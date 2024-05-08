function minNumber(nums1: number[], nums2: number[]): number {
  const set = new Set(nums1)
  let x = 10
  for (const n of nums2) {
    if (set.has(n))
      x = Math.min(x, n)
  }
  if (x !== 10)
    return x

  const n1 = Math.min(...nums1)
  const n2 = Math.min(...nums2)
  return Math.min(n1 * 10 + n2, n2 * 10 + n1)
}

export default minNumber
