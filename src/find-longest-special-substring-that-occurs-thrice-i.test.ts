import { expect, test } from "vitest";
import { maximumLength } from "./find-longest-special-substring-that-occurs-thrice-i";

test("2981. 找出出现至少三次的最长特殊子字符串 I", () => {
	expect(maximumLength("aaaa")).toBe(2);
	expect(maximumLength("abcdef")).toBe(-1);
	expect(maximumLength("abcaba")).toBe(1);
	expect(maximumLength("abcccccdddd")).toBe(3);
	expect(maximumLength("aaa")).toBe(1);
});
