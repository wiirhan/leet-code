import { describe, expect, test } from "vitest";
import { commonChars } from "./find-common-characters";

describe("should", () => {
	test("查找共用字符", () => {
		expect(commonChars(["bella", "label", "roller"])).toEqual(["e", "l", "l"]);
		expect(commonChars(["cool", "lock", "cook"])).toEqual(["c", "o"]);
	});
});
