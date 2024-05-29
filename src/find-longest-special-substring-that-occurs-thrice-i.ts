// link: https://leetcode.cn/problems/find-longest-special-substring-that-occurs-thrice-i/

export function maximumLength(s: string): number {
	let num = -1;
	const list = s.split("");

	function findNum(str: string) {
		const n = str.length;
		let l = 0;
		let ss = s;
		for (let z = 0; z < s.length; z++) {
			const index = ss.indexOf(str);
			if (index > -1) {
				l++;
				ss = ss.substring(index + 1);
			}
			if (ss.length < z) {
				break;
			}
		}
		return l >= 3 ? n : -1;
	}

	for (let i = 0; i < s.length; i++) {
		const w = s[i];
		let str = w;
		const result = findNum(str);
		num = result > num ? result : num;
		for (let j = i + 1; j < s.length; j++) {
			if (w === list[j]) {
				str += w;
				const result = findNum(str);
				num = result > num ? result : num;
			} else {
				const result = findNum(str);
				num = result > num ? result : num;
				break;
			}
		}
	}
	return num;
}

console.log(maximumLength("aaa"));
