## 介绍

JSONHunter 可以帮助你快速获取某网站指定元素，实现类似爬虫或者获取 JSON PlaceHolder 效果。

## 演示

![](assets/demo.gif)

## 使用说明

事例 1：获取 v2ex 首页贴子标题

```
[
    {
        "name": ".topic-link",
        "alias": "title"
    }
]
```

事例 2: 获取 v2ex 首页贴子标题及链接，发帖人及链接，以及发表时间

```
[
    {
        "name": ".topic-link",
        "attrs": [
        "href"
        ]
    },
    {
        "name": ".topic_info strong:first-of-type a",
        "attrs": [
        "href"
        ]
    },
    {
        "name": ".topic_info span"
    }
]
```

## ⚠️ 注意：

```
*  任何元素

E  任何类型E的元素

E:nth-child(n)  一个E元素，其父元素的第n个子元素

E:first-child  一个E元素，其父元素的第一个孩子

E:nth-of-type(n)  E元素，其类型的第n个同级

E:first-of-type  E元素，其类型的第一个同级

E:not(s)  与两个复合选择器都不匹配的E元素

E.warning  属于类警告的E元素

E#myid  ID等于myid的E元素。

E[foo]  具有foo属性的E元素

E[foo="bar"]  一个E元素，其foo属性值完全等于bar

E[foo="bar" i]  一个E元素，其foo属性值完全等于bar的任何（ASCII范围）大小写排列

E[foo="bar" s]  一个E元素，其foo属性值与大小写精确且等于bar

E[foo~="bar"]  一个E元素，其foo属性值是由空格分隔的值的列表，其中一个值等于bar

E[foo^="bar"]  一个E元素，其foo属性值完全以字符串bar开头

E[foo$="bar"]  一个E元素，其foo属性值恰好以字符串bar结尾

E[foo*="bar"]  一个E元素，其foo属性值包含子字符串栏

E[foo|="en"]  一个E元素，其foo属性值是用en开头的连字符分隔的值列表

E F  E元素的F元素后代

E > F  E元素的F元素子元素
```

# API 说明

---

| 字段名 | 类型   | 是否必填 |
| ------ | ------ | -------- |
| name   | string | required |
| alias  | string | optional |
| attrs  | array  | optional |
