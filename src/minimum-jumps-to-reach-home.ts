function minimumJumps(forbidden: number[], a: number, b: number, x: number): number {
  const visited = new Set<string>()
  const queue = [[0, 0, false]]
  const max = Math.max(...forbidden, x) + a + b
  const forbiddenSet = new Set(forbidden)

  while (queue.length) {
    const [pos, steps, backward] = queue.shift() as [number, number, boolean]
    if (pos === x)
      return steps

    const key = `${pos},${backward}`
    if (pos < 0 || pos > max || forbiddenSet.has(pos) || visited.has(key))
      continue

    visited.add(key)
    queue.push([pos + a, steps + 1, false])
    if (!backward && pos - b > 0)
      queue.push([pos - b, steps + 1, true])
  }

  return -1
}

export default minimumJumps
