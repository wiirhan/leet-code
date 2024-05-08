// link: https://leetcode.cn/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
	let indexs: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		const element = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			if (element + nums[j] === target) {
				indexs = [i, j];
			}
		}
	}
	return indexs;
}

export default twoSum;
