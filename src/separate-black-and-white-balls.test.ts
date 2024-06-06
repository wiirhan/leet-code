import { expect, test } from "vitest";
import { minimumSteps } from "./separate-black-and-white-balls";

test("2938. 区分黑球与白球", () => {
	expect(minimumSteps("101")).toBe(1);
	expect(minimumSteps("100")).toBe(2);
	expect(minimumSteps("0111")).toBe(0);
	expect(minimumSteps("11000111")).toBe(6);
});
