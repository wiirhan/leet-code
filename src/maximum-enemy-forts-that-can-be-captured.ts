function captureForts(forts: number[]): number {
  let ans = 0
  let pre = -1
  for (let i = 0; i < forts.length; i++) {
    if (forts[i] === 1 || forts[i] === -1) {
      if (pre >= 0 && forts[i] !== forts[pre])
        ans = Math.max(ans, i - pre - 1)

      pre = i
    }
  }
  return ans
}

export default captureForts
