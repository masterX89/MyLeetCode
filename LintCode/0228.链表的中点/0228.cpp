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
     * @param head: the head of linked list.
     * @return: a middle node of the linked list
     */
    ListNode * middleNode(ListNode * head) {
        if (!head) return NULL;
        ListNode * fast = head -> next;
        ListNode * slow = head;
        while (fast && fast -> next) {
            slow = slow -> next;
            fast = fast -> next -> next;
        }
        return slow;
    }
};

int main() {
    Solution s;
    // case 1:
    vector<int> v = {1, 2, 3};
    ListNode * head = NULL;
    for (int num : v) {
        addToTail(&head,num);
    }
    printList(s.middleNode(head));
    // case 2
    v = {1, 2};
    head = NULL;
    for (int num : v) {
        addToTail(&head, num);
    }
    printList(s.middleNode(head));
    return 0;
}