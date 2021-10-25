#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    /**
     * @param A: sorted integer array A
     * @param B: sorted integer array B
     * @return: A new sorted integer array
     */
    vector<int> mergeSortedArray(vector<int> &A, vector<int> &B) {
        // write your code here
        vector<int> ans = {};
        int i, j;
        for (i = 0, j = 0; i < A.size() && j < B.size();) {
            if (A[i] < B[j]) {
                ans.push_back(A[i++]);
            } else {
                ans.push_back(B[j++]);
            }
        }
        while (i < A.size()) {
            ans.push_back(A[i++]);
        }
        while (j < B.size()) {
            ans.push_back(B[j++]);
        }
        return ans;
    }
};

int main() {
    Solution s;
    vector<int> A = {1,2,3,4};
    vector<int> B = {2,4,5,6};
    for (int num : s.mergeSortedArray(A, B)) {
        cout << num << endl;
    }
    return 0;
}