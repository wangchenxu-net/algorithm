void selection_sort(int arr[], int n)
{
	for (int i = 0; i < n; i++)
	{
		int k = i;
		for (int j = i + 1; j < n; j++)
		{
			if (arr[k] > arr[j])
			{
				// 标记当前最小值的索引
				k = j;
			}
		}
		if (k != i) {
			// 交换两个数值
			int temp = arr[k];
			arr[k] = arr[i];
			arr[i] = temp;
		}
	}
}
