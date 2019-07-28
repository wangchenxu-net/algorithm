void bubble_sort(void* arr[], int n, int compare(void * a, void * b))
{
	for (int i = n - 1; i > 0; i--)
	{
		// 标记此轮是否有过交换
		int swapped = 0;
		for (int j = 0; j < i; j++)
		{
			if (compare(arr[j], arr[j + 1]) > 0)
			{
				// 交换两个数值
				void* temp = arr[j];
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
