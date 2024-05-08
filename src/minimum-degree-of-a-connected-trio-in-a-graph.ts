function minTrioDegree(n: number, edges: number[][]): number {
  const graph = new Map<number, Set<number>>()
  const degrees = new Map<number, number>()

  for (const [u, v] of edges) {
    if (!graph.has(u))
      graph.set(u, new Set<number>())
    if (!graph.has(v))
      graph.set(v, new Set<number>())
    graph.get(u)!.add(v)
    graph.get(v)!.add(u)
    degrees.set(u, (degrees.get(u) || 0) + 1)
    degrees.set(v, (degrees.get(v) || 0) + 1)
  }

  let min = Infinity
  for (const [u, v] of edges) {
    if (!graph.has(u) || !graph.has(v))
      continue

    for (const w of graph.get(u)!) {
      if (!graph.has(w) || !graph.get(w)!.has(v))
        continue

      const degree = degrees.get(u)! + degrees.get(v)! + degrees.get(w)! - 6
      min = Math.min(min, degree)
    }
  }

  if (min < Infinity)
    return min

  return -1
}

export default minTrioDegree
