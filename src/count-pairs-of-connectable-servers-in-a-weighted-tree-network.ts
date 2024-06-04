// link: https://leetcode.cn/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/
// TODO: 待实现

export function countPairsOfConnectableServers(
	edges: number[][],
	signalSpeed: number,
): number[] {
	const n = edges.length + 1;
	const graph: Array<Array<[number, number]>> = Array.from(
		{ length: n },
		() => [],
	);
	for (const [u, v, w] of edges) {
		graph[u].push([v, w]);
		graph[v].push([u, w]);
	}
	const dfs = (p: number, root: number, curr: number): number => {
		let res = 0;
		if (curr === 0) {
			res++;
		}
		for (const [v, cost] of graph[p]) {
			if (v !== root) {
				res += dfs(v, p, (curr + cost) % signalSpeed);
			}
		}
		return res;
	};

	const res: number[] = Array(n).fill(0);
	for (let i = 0; i < n; i++) {
		let pre = 0;
		for (const [v, cost] of graph[i]) {
			const cnt = dfs(v, i, cost % signalSpeed);
			res[i] += pre * cnt;
			pre += cnt;
		}
	}
	return res;
}
