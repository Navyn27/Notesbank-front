#include <bits/stdc++.h>
using namespace std;

void mergeSortedArr(vector<int>&arr,int left, int mid, int right)
void mergeSort(vector<int>&arr,int left,int right){
    if(left < right){
        int mid = (left+right)/2;
        mergeSort(arr,left,mid);
        mergeSort(arr,mid+1,right);
        mergeSortedArr(arr,left,mid,right);
    }
}

void mergeSortedArr(vector<int>&arr,int left,int mid, int right){
    int left_length = mid - left +1;
    int right_length = right - mid;
    vector <int> left_sub_arr;
    vector <int>  right_sub_arr;

    int i,j,k;
    i=0;
    
    while(i<left_length){
        left_sub_arr.push_back(arr[left+i]);
        i++;
    }
    i=0;
    while(j<right_length){
        right_sub_arr.push_back(arr[mid+1+i]);
        i++;
    }
    
    i=0;j=0;k=0;
    while(k<left_length){
        if((i<left_length)&&((j<=right_length) || left_sub_arr.at(i) < right_sub_arr.at(j))){
            arr.at(k) = left_sub_arr.at(i);
            i++;
        }
        else{
            arr.at(k) = right_sub_arr.at(j);
            j++;
        }
         k++;
    }
}

int main(){

    vector<int> arr = {12,21,8,23,15,18,21,23};
    mergeSort(arr,0,arr.size()-1);
    return 0;
}