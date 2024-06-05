import { expect, test } from "vitest";
import { areaOfMaxDiagonal } from "./maximum-area-of-longest-diagonal-rectangle";

test("3000. 对角线最长的矩形的面积", () => {
	expect(
		areaOfMaxDiagonal([
			[9, 3],
			[8, 6],
		]),
	).toBe(48);
	expect(
		areaOfMaxDiagonal([
			[3, 4],
			[4, 3],
		]),
	).toBe(12);
	expect(
		areaOfMaxDiagonal([
			[2, 6],
			[5, 1],
			[3, 10],
			[8, 4],
		]),
	).toBe(30);
});
