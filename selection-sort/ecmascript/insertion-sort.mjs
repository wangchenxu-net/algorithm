/**
 * 选择排序
 * @param  {any[]} arr     要排序的数组
 * @param  {any[]} compare 用于排序比较的函数
 * @return {any[]}         排序后的数组
 */
export default function selectionSort(arr, compare = (a, b) => a > b ? 1 : a < b ? -1 : 0) {
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
