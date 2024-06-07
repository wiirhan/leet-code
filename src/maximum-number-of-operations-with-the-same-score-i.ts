// link: https://leetcode.cn/problems/maximum-number-of-operations-with-the-same-score-i/

export function maxOperations(nums: number[]): number {
	let res = 0;
	if (nums.length < 2) {
		return res;
	}
	const sum = nums[0] + nums[1];
	while (sum === nums[0] + nums[1]) {
		nums.splice(0, 2);
		res++;
	}

	return res;
}
