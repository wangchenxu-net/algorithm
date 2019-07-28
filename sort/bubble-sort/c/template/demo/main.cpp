#include <stdio.h>
#include "../bubble_sort.hpp"
int sort(int a, int b) {
	return b - a;
}
int main()
{
	int arr[10];
	for (int i = 0; i < 10; i++)
	{
		scanf("%d", &arr[i]);
	}
	bubble_sort(arr, 10, sort);
	for (int i = 0; i < 10; i++)
	{
		printf("%d ", arr[i]);
	}
}
