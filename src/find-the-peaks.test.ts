import { expect, test } from "vitest";
import { findPeaks } from "./find-the-peaks";

test("find the peaks", () => {
	expect(findPeaks([2, 4, 4])).toStrictEqual([]);
	expect(findPeaks([1, 4, 3, 8, 5])).toStrictEqual([1, 3]);
});
