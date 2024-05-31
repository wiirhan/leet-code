// link: https://leetcode.cn/problems/find-missing-and-repeated-values/
export function findMissingAndRepeatedValues(grid: number[][]): number[] {
	const n = grid.length;
	const count = Array(n * n + 1).fill(0);
	count[0] = -1;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			count[grid[i][j]]++;
		}
	}
	return [count.indexOf(2), count.indexOf(0)];
}
