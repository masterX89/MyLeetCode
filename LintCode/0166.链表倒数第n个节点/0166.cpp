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
    /*
     * @param head: The first node of linked list.
     * @param n: An integer
     * @return: Nth to last node of a singly linked list. 
     */
    ListNode * nthToLast(ListNode * head, int n) {
        // write your code here
        if (head == NULL || n == 0) return NULL;
        ListNode *p1 = head;
        ListNode *p2 = head;
        for (int i = 0; i < n; i++) {
            if (p1) {
                p1 = p1 -> next;
            } else {
                return NULL;
            }
        }
        while (p1) {
            p1 = p1 -> next;
            p2 = p2 -> next;
        }
        return p2;
    }
};

int main() {
    Solution s;
    // case 1
    vector<int> v = {3,2,1,5};
    ListNode *head = NULL;
    for (int i = 0; i < v.size(); i++) {
        addToTail(&head,v[i]);
    }
    printList(s.nthToLast(head,2));
    // case 2
    v = {1,2,3};
    head = NULL;
    for (int i = 0; i < v.size(); i++) {
        addToTail(&head,v[i]);
    }
    printList(s.nthToLast(head,3));
    return 0;
}