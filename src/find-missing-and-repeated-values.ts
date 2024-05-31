// link: https://leetcode.cn/problems/find-missing-and-repeated-values/
export function findMissingAndRepeatedValues(grid: number[][]): number[] {
	const set = new Set<number>();
	const list = grid.flat().sort();
	const result = [];
	for (let i = 0; i < list.length; i++) {
		const n = list[i];
		if (set.has(n)) {
			result.push(n);
		} else {
			set.add(n);
		}
	}
	for (let i = 1; i < list.length + 1; i++) {
		if (!set.has(i)) {
			result.push(i);
		}
	}
	return result;
}
