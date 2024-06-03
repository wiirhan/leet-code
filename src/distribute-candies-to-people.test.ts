import { expect, test } from "vitest";
import { distributeCandies } from "./distribute-candies-to-people";

test("1103. 分糖果 II", () => {
	expect(distributeCandies(7, 4)).toStrictEqual([1, 2, 3, 1]);
	expect(distributeCandies(10, 3)).toStrictEqual([5, 2, 3]);
});
