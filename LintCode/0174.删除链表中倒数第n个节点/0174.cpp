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
     * @param n: An integer
     * @return: The head of linked list.
     */
    ListNode * removeNthFromEnd(ListNode * head, int n) {
        // write your code here
        if (!head || n == 0) return head;
        ListNode * preHead = new ListNode(0);
        preHead -> next = head;
        ListNode * p1 = head;
        ListNode * p2 = preHead;
        for (int i = 0; i < n; i++) {
            p1 = p1 -> next;
        }
        while (p1) {
            p1 = p1 -> next;
            p2 = p2 -> next;
        }
        p2 -> next = p2 -> next -> next;
        return preHead -> next;
    }
};

int main() {
    Solution s;
    // case 1
    vector<int> v = {1, 2, 3, 4, 5};
    ListNode *head = NULL;
    for (int i = 0; i < v.size(); i++) {
        addToTail(&head,v[i]);
    }
    printList(s.removeNthFromEnd(head,5));
    // case 2
    v = {5, 4, 3, 2, 1};
    head = NULL;
    for (int i = 0; i < v.size(); i++) {
        addToTail(&head,v[i]);
    }
    return 0;
}