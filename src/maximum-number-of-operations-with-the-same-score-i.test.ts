import { expect, test } from "vitest";
import { maxOperations } from "./maximum-number-of-operations-with-the-same-score-i";

test("3038. 相同分数的最大操作数目 I", () => {
	expect(maxOperations([3, 2, 1, 4, 5])).toBe(2);
	expect(maxOperations([3, 2, 6, 1, 4])).toBe(1);
});
