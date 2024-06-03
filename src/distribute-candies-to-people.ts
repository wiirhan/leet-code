// link: https://leetcode.cn/problems/distribute-candies-to-people/

export function distributeCandies(
	candies: number,
	num_people: number,
): number[] {
	let remainCandies = candies;
	const result = new Array(num_people).fill(0);
	let index = 0;
	while (remainCandies > 0) {
		for (let i = 0; i < result.length; i++) {
			const num = num_people * index + 1 + i;
			if (num > remainCandies) {
				result[i] = result[i] + remainCandies;
				return result;
			}
			result[i] = result[i] + num;
			remainCandies -= num;
		}
		index++;
	}
	return result;
}
