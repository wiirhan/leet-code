import { expect, test } from "vitest";
import { countPairsOfConnectableServers } from "./count-pairs-of-connectable-servers-in-a-weighted-tree-network";

test("3067. 在带权树网络中统计可连接服务器对数目", () => {
	expect(
		countPairsOfConnectableServers(
			[
				[0, 1, 1],
				[1, 2, 5],
				[2, 3, 13],
				[3, 4, 9],
				[4, 5, 2],
			],
			1,
		),
	).toStrictEqual([0, 4, 6, 6, 4, 0]);
	expect(
		countPairsOfConnectableServers(
			[
				[0, 6, 3],
				[6, 5, 3],
				[0, 3, 1],
				[3, 2, 7],
				[3, 1, 6],
				[3, 4, 2],
			],
			3,
		),
	).toStrictEqual([2, 0, 0, 0, 0, 0, 2]);
});
