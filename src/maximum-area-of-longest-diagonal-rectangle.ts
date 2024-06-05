// link: https://leetcode.cn/problems/maximum-area-of-longest-diagonal-rectangle/
export function areaOfMaxDiagonal(dimensions: number[][]): number {
	let [diagonal, area] = [0, 0];
	for (let i = 0; i < dimensions.length; i++) {
		const [h, w] = dimensions[i];
		const d = Math.sqrt(h * h + w * w);
		const a = h * w;
		if (diagonal < d) {
			diagonal = d;
			area = a;
		} else if (diagonal === d) {
			if (area < a) {
				area = a;
			}
		}
	}
	return area;
}
