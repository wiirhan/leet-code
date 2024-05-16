import { describe, expect, test } from "vitest";
import { factorialRecur, linearLogRecur } from "./time-complextity";

describe("should", () => {
	test("exported", () => {
		expect(factorialRecur(4)).toBe(24);
		expect(linearLogRecur(4)).toBe(12);
	});
});
