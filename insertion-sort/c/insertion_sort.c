void insertion_sort(int arr[], int n)
{
	for (int i = 1; i < n; i++)
	{
		for (int j = i; j > 0; j--)
		{
			if (arr[j - 1] > arr[j])
			{
				// 交换两个数值
				int temp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temp;
			}
			else
			{
				// 不再需要交换，结束此轮循环
				break;
			}
		}
	}
}
