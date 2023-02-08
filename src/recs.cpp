#include <bits/stdc++.h>
using namespace std;

int main(){

    int records[] = {1,5,8,9};
    int index = 2;
    int toAppend = 7;
    int iter = 2;
    int asize = sizeof(records)/sizeof(records[0]);

    int temp;
    while(iter<=asize) {
        temp = records[iter];
        records[i] = toAppend;
        toAppend = temp;
        iter++;
    }

    return 0;
}