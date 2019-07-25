def bubble_sort(arr)
	len = arr.length
	for i in 1...len
		swapped = false
		for j in 0...(len - i)
			if arr[j] > arr[j + 1]
				# 交换两个数值
				arr[j], arr[j + 1] = arr[j + 1], arr[j]
				# 标记此轮有交换过
				swapped = true
			end
		end
		if not swapped
			break
		end
	end
	return arr
end
