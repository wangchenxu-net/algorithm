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
	// 默认第一项为已排好队伍中的唯一一项，i 从 1 开始
	for (let i = 1; i < n; i++) {
		// 暂存要插入的值 arr[i]
		// 此时 arr[i] 可以填入 arr[i - 1] 的值
		let temp = arr[i];
		let j;
		for (j = i - 1; j >= 0; j--) {
			// 由初始化操作, 或上一轮操作知：
			// 此时 arr[j + 1] 为空(准确的说是，其值已经被赋值到其他地方)
			if (compare(arr[j], temp) > 0) {
				// 如果当前位置的值大于要插入的值，则 arr[j] 可以后移
				arr[j + 1] = arr[j];
			} else {
				// 否则结束此轮循环
				break;
			}
		}
		// 最后将原来的 arr[i] 填入到arr[j + 1] 中
		// 当此时原来的 arr[i] 为最小值时， j = -1;
		// 否则 j 为不大于 原来的 arr[i] 的最后一个值，应将值填入此处
		arr[j + 1] = temp;
	}
	return arr;
}
