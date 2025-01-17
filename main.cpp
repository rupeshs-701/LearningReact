#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool canConvertToSmartCity(const vector<int>& heights) {
    int n = heights.size();
    int leftSum = 0, rightSum = 0;

    for (int i = 0; i < n / 2; i++) {
        leftSum += heights[i];
    }

    for (int i = n / 2; i < n; i++) {
        rightSum += heights[i];
    }

    return leftSum == rightSum;
}

int main() {
    int T;
    cin >> T;

    while (T--) {
        int N;
        cin >> N;

        vector<int> heights(N);
        for (int i = 0; i < N; i++) {
            cin >> heights[i];
        }

        if (canConvertToSmartCity(heights)) {
            cout << "YES" << endl;
        } else {
            cout << "NO" << endl;
        }
    }

    return 0;
}