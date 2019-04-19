def bubble_sort(lis):
	count = len(lis)
	for i in range(1,count):
		swapped = False
		for j in range(0, count - i):
			if lis[j] > lis[j + 1]:
				# 交换两个数值
				lis[j], lis[j + 1] = lis[j + 1], lis[j]
				# 标记此轮有交换过
				swapped = True;
		if not swapped:
			break
	return lis
