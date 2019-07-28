/**
 * 冒泡排序
 * @param arr     要排序的数组
 * @param compare 用于排序比较的函数
 */
export default function bubbleSort<T>(arr: T[], compare: (a: T, b: T) => number = (a, b) => a > b ? 1 : a < b ? -1 : 0): T[] {
	// 将数值进行复制
	arr = Array.from(arr);
	// n 为数组长度
	const n = arr.length;
	for (let i = n - 1; i > 0; i--) {
		// 标记此轮是否有过交换
		let swapped = false;
		for (let j = 0; j < i; j++) {
			if (compare(arr[j], arr[j + 1]) > 0) {
				// 交换两个数值
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				// 标记此轮有交换过
				swapped = true;
			}
		}
		// 若此轮没有交换过，表示已经排好序列，直接返回
		if (!swapped) {
			break;
		}
	}
	return arr;
}
