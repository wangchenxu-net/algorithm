/**
 * 插入排序
 * @param arr     要排序的数组
 * @param compare 用于排序比较的函数
 */
export default function insertionSort<T>(arr: T[], compare: (a: T, b: T) => number = (a, b) => a > b ? 1 : a < b ? -1 : 0): T[] {
	// 将数值进行复制
	arr = Array.from(arr);
	// n 为数组长度
	const n = arr.length;
	for (let i = 1; i < n; i++) {
		for (let j = i; j > 0; j--) {
			if (compare(arr[j - 1], arr[j]) > 0) {
				// 交换两个数值
				[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
			}
		}
	}
	return arr;
}
