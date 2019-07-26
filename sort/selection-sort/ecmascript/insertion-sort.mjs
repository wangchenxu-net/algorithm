/**
 * 选择排序
 * @param  {number[]} arr 要排序的数组
 * @return {number[]}     排序后的数组
 */
export default function selectionSort(arr) {
	// 将数值进行复制
	arr = Array.from(arr);
	// n 为数组长度
	const n = arr.length;
	for (let i = 0; i < n; i++) {
		let k = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[k] > arr[j]) {
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
