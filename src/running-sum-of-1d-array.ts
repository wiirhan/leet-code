function runningSum(nums: number[]): number[] {
  const list = [...nums]
  const n = list.length
  for (let i = 1; i < n; i++)
    list[i] += list[i - 1]

  return list
}

export default runningSum
