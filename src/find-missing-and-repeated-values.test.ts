import { expect, test } from "vitest";
import { findMissingAndRepeatedValues } from "./find-missing-and-repeated-values";

test("2965. 找出缺失和重复的数字", () => {
	expect(
		findMissingAndRepeatedValues([
			[1, 3],
			[2, 2],
		]),
	).toStrictEqual([2, 4]);
	expect(
		findMissingAndRepeatedValues([
			[9, 1, 7],
			[8, 9, 2],
			[3, 4, 6],
		]),
	).toStrictEqual([9, 5]);
});
