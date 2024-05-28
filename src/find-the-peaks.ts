// link: https://leetcode.cn/problems/find-the-peaks/

export function findPeaks(mountain: number[]): number[] {
	if (mountain.length === 0) {
		return [];
	}
	const result = [];
	for (let i = 1; i < mountain.length - 1; i++) {
		const m = mountain[i];
		if (m > mountain[i - 1] && m > mountain[i + 1]) {
			result.push(i);
		}
	}
	return result;
}
