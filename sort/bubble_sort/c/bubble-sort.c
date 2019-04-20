void bubble_sort(int arr[], int n)
{
	for (int i = n - 1; i > 0; i--)
	{
		// 标记此轮是否有过交换
		int swapped = 0;
		for (int j = 0; j < i; j++)
		{
			if (arr[j] > arr[j + 1])
			{
				// 交换两个数值
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				// 标记此轮有交换过
				swapped = 1;
			}
		}
		// 若此轮没有交换过，表示已经排好序列，直接返回
		if (!swapped)
		{
			break;
		}
	}
}
