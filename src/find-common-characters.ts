// link: https://leetcode.cn/problems/find-common-characters/

export function commonChars(words: string[]): string[] {
	const list: string[] = [];
	let [first, ...others] = words;
	for (const s of first) {
		let flag = true;
		others = others.map((w) => {
			if (!w.includes(s)) {
				flag = false;
			}
			return w.replace(s, "");
		});
		if (flag) {
			list.push(s);
		}
	}

	return list;
}
