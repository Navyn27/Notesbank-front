#include <iostream>
using namespace std;

int search(int nums[],int size, int target){
    int i = 0;
    while(i < size){
        if(nums[i] == target){
            return i;
        }
        i++;
    }
    return -1;
}

int main(){

    int nums[] = {7,8,5,2,1,3,4,12,5};
    
    cout<<search(nums,9,3)<<endl;

    return 0;
}