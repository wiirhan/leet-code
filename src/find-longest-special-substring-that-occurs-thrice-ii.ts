// link: https://leetcode.cn/problems/find-longest-special-substring-that-occurs-thrice-ii/

export function maximumLength(s: string): number {
	const n = s.length;
	const cnt = Array.from({ length: 26 }, () => Array(3).fill(0));

	let i = 0;
	while (i < n) {
		let j = i;
		while (j < n && s[j] === s[i]) {
			j++;
		}
		const index = s.charCodeAt(i) - 97;
		const len = j - i;
		if (len > cnt[index][0]) {
			[cnt[index][0], cnt[index][1], cnt[index][2]] = [
				len,
				cnt[index][0],
				cnt[index][1],
			];
		} else if (len > cnt[index][1]) {
			[cnt[index][1], cnt[index][2]] = [len, cnt[index][1]];
		} else if (len > cnt[index][2]) {
			cnt[index][2] = len;
		}
		i = j;
	}

	let res = 0;
	for (const vec of cnt) {
		res = Math.max(...[res, vec[0] - 2, Math.min(vec[0] - 1, vec[1])], vec[2]);
	}
	return res !== 0 ? res : -1;
}
