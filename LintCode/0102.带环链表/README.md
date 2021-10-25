# [102.带环链表](https://www.lintcode.com/problem/102/)

## 题目

给定一个链表，判断它是否有环。

> 链表长度不超过10000。

样例
样例 1：

输入：
```
linked list = 21->10->4->5，then tail connects to node index 1(value 10).
```
输出：
```
true
```
解释：

链表有环。

样例 2：

输入：
```
linked list = 21->10->4->5->null
```
输出：
```
false
```
解释：

链表无环。

## 题目大意

## 解题思路

快慢指针
注意由于快指针跑的较快，所以只需要判断快指针是否到 `NULL`，即 `fast && fast -> next`
穷举比较法、哈希缓存法