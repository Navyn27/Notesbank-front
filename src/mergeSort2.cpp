#include <bits/stdc++.h>
using namespace std;

void merge_sort_recursion(int a[], int l, int r);
void merge_sorted_arrays(int a[], int l, int m, int r);

int main()
{
  vector<int> arr = { 9, 4, 8, 1, 7, 0, 3, 2, 5, 6};
  int length = 10;
  
  merge_sort(vector<int>arr, length-1);
  
  for (int i = 0; i < length; i++)
    printf("%d ", array[i]);
  printf("\n");
  
  return 0;
}

void merge_sort(vector<int> arr, int left, int right)
{

  if (left < right)
  {
    int m = left + (right - left) / 2;

    merge_sort_recursion(a, left, mid);      
    merge_sort_recursion(a, middle + 1, right);

    merge_sorted_arrays(a, left, mid, right);
  }
}

void merge_sorted_arrays(vector <int> arr, int left, int mid, int right)
{
  int left_length = mid - left + 1;
  int right_length = right - mid;

  vector <int> left_sub_arr;
  vector <int> right_sub_arr;

  int i, j, k;

  i = 0;  
  while(i<left_length){
    left_sub_arr.push_back(arr[left+i]);
    i++;
  }

  i=0;
  while(i<right_length){
    right_sub_arr.push_back(arr[right+i]);
    i++;
  }
  for (int i = 0; i < left_length; i++)
    temp_left[i] = a[l + i];
  for (int i = 0; i < right_length; i++)
    temp_right[i] = a[m + 1 + i];

  for (i = 0, j = 0, k = l; k <= r; k++)
  {
    if ((i < left_length) &&
        (j >= right_length || temp_left[i] <= temp_right[j]))
    {
      a[k] = temp_left[i];
      i++;
    }
    else
    {
      a[k] = temp_right[j];
      j++;
    }
  }  
}