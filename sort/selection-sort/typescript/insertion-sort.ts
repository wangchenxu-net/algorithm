/**
 * 选择排序
 * @param arr     要排序的数组
 * @param compare 用于排序比较的函数
 */
export default function selectionSort<T>(arr: T[], compare: (a: T, b: T) => number = (a, b) => a > b ? 1 : a < b ? -1 : 0): T[] {
	// 将数值进行复制
	arr = Array.from(arr);
	// n 为数组长度
	const n = arr.length;
	for (let i = 0; i < n; i++) {
		let k = i;
		for (let j = i + 1; j < n; j++) {
			if (compare(arr[k], arr[j]) > 0) {
				// 标记当前最小值的索引
				k = j;
			}
		}
		if (k != i) {
			[arr[i], arr[k]] = [arr[k], arr[i]];
		}
	}
	return arr;
}
