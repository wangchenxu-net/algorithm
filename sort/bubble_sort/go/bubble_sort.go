package main

func bubble_sort(arr []int, size int) []int {
	var i, j int;
	for i = size - 1; i > 0; i-- {
		// 标记此轮是否有过交换
		var swapped = false;
		for j = 0; j < i; j++ {
			if arr[j] > arr[j + 1] {
				// 交换两个数值
				var temp = arr[j];
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
				// 标记此轮有交换过
				swapped = true;
			}
		}
		// 若此轮没有交换过，表示已经排好序列，直接返回
		if !swapped {
			break;
		}
	}
	return arr;
}