#include <stdio.h>
#include "malloc.h"
#include "../bubble_sort.h"

int sort(int* a, int* b) {
	return *b - *a;
}
int main()
{
	int* arr[10];
	for (int i = 0; i < 10; i++)
	{
		arr[i] = malloc(sizeof(int));
		scanf("%d", arr[i]);
	}
	bubble_sort((void**)arr, 10, (int (*)(void* a, void* b))sort);
	for (int i = 0; i < 10; i++)
	{
		printf("%d ", *arr[i]);
		free(arr[i]);
	}
}
