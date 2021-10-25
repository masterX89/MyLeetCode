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
    ListNode* cycleMeet(ListNode * head) {
        ListNode * slow = head;
        ListNode * fast = head;
        while (fast && fast -> next) {
            slow = slow -> next;
            fast = fast -> next -> next;
            if (slow == fast) return slow;
        }
        return NULL;
    }
    /**
     * @param head: The first node of linked list.
     * @return: The node where the cycle begins. if there is no cycle, return null
     */
    ListNode * detectCycle(ListNode * head) {
        // write your code here
        if (!cycleMeet(head)) return NULL;
        ListNode * p1 = head;
        ListNode * p2 = cycleMeet(head);
        while (p1 != p2) {
            p1 = p1 -> next;
            p2 = p2 -> next;
        }
        return p1;
    }
};

int main() {
    Solution s;
    // case 1: null
    ListNode *head = NULL;
    printList(s.detectCycle(head));
    // case 2: 21 -> 10 -> 4 -> 5
    //               ^----------|
    vector<int> v = {21, 10, 4, 5};
    head = NULL;
    for (int i = 0; i < v.size(); i++) {
        addToTail(&head, v[i]);
    }
    head -> next -> next -> next -> next = head -> next;
    printList(s.detectCycle(head));
    return 0;
}