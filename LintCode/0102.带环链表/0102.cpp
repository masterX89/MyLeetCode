#include <bits/stdc++.h>
using namespace std;

class ListNode {
public:
    int val;
    ListNode *next;
    ListNode(int val) {
        this->val = val;
        this->next = NULL;
    }
};

void addToTail(ListNode **head, int val) {
    ListNode *node = new ListNode(val);
    if (!*head) {
        *head = node;
    } else {
        ListNode *tmp = *head;
        while (tmp -> next) {
            tmp = tmp -> next;
        }
        tmp -> next = node;
    }
}

void printList(ListNode *head) {
    ListNode *tmp;
    tmp = head;
    if (tmp == NULL) {
        cout << "empty list" << endl;
    } else {
        while (tmp != NULL) {
            cout << tmp -> val << "->";
            tmp = tmp -> next;
        }
        cout << "NULL" << endl;
    }
}

class Solution {
public:
    /**
     * @param head: The first node of linked list.
     * @return: True if it has a cycle, or false
     */
    bool hasCycle(ListNode * head) {
        // write your code here
        ListNode *slow = head;
        ListNode *fast = head;
        while (fast && fast -> next) {
            slow = slow -> next;
            fast = fast -> next -> next;
            if (slow == fast) return true;
        }
        return false;
    }
};

int main() {
    Solution s;
    // case 1: 21 -> 10 -> 4 -> 5
    //               ^  <-------|
    vector<int> v = {21, 10, 4, 5};
    ListNode *head = NULL;
    for (int i = 0; i < v.size(); i++) {
        addToTail(&head, v[i]);
    }
    head -> next -> next -> next -> next = head -> next;
    cout << s.hasCycle(head) << endl;
    // case 2: 21 -> 10 -> 4 -> 5 -> null
    v = {21, 10, 4, 5};
    head = NULL;
    for (int i = 0; i < v.size(); i++) {
        addToTail(&head, v[i]);
    }
    cout << s.hasCycle(head) << endl;
    // case 3: null
    head = NULL;
    cout << s.hasCycle(head) << endl;

    return 0;
}