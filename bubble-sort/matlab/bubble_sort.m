function arr = bubble_sort(arr)
%bubble_sort - 对数组从小到大排列
%
% Syntax: sort_arr = bubble_sort(arr)
%
% 使用冒泡排序对数组从小到大排序
	len = length(arr);
	for i = 1 : (len - 1)
		swapped = false;
		for j = 1 : (len - i)
			if arr(j) > arr(j + 1)
				temp = arr(j);
				arr(j) = arr(j + 1);
				arr(j + 1) = temp;
				swapped = true;
			end
		end
		if ~swapped
			break;
		end
	end
end