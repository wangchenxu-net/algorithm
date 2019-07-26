/**
 * 插入排序
 * @param {} arr 要排序的数组
 */
export default function insertionSort(arr: number[]): number[] {
	// 将数值进行复制
	arr = Array.from(arr);
	// n 为数组长度
	const n = arr.length;
	for (let i = 1; i < n; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j - 1] > arr[j]) {
				// 交换两个数值
				[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
			}
		}
	}
	return arr;
}
