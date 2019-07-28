/**
 * 插入排序
 * @param  {any[]} arr     要排序的数组
 * @param  {any[]} compare 用于排序比较的函数
 * @return {any[]}         排序后的数组
 */
export default function insertionSort(arr, compare = (a, b) => a > b ? 1 : a < b ? -1 : 0) {
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
