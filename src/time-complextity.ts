/* 线性对数阶 */
export function linearLogRecur(n: number): number {
	if (n <= 1) return 1;
	let count = linearLogRecur(n / 2) + linearLogRecur(n / 2);
	for (let i = 0; i < n; i++) {
		count++;
	}
	return count;
}

/* 阶乘阶（递归实现） */
export function factorialRecur(n: number): number {
	if (n === 0) return 1;
	let count = 0;
	// 从 1 个分裂出 n 个
	for (let i = 0; i < n; i++) {
		count += factorialRecur(n - 1);
	}
	return count;
}
