# pinyin-match

能够使用拼音快速检索目标。

1. 31KB
2. 支持多音字、拼音首字母匹配,具备分词功能
3. 覆盖 6763 个汉字
4. 返回位置信息，可用于高亮匹配字符
5. 在长多音字串下依然有高性能

在线演示：<http://139.199.181.200:8686>;

## 安装

```shell
npm install pinyin-match --save
```

也支持`<script>`引入

`<script src="pinyin-match/dist/main.js"></script>`

`PinyinMatch.match('xxx', 'x')`

## API

### .match(input, keyword)

查询匹配拼音的数据。

参数：

1. input `{string}` 目标字符串
2. keyword `{string}` 输入的拼音或其他关键词

返回：

`{[Array]|{Boolean}}`

## 使用范例

列表项为字符串：

```js

const PinyinMatch = require('pinyin-match');
let test = '123曾经沧海难为水除却巫山不是云'

PinyinMatch.match(test, '23曾'); // [1, 3]

PinyinMatch.match(test, 'cjc') // [3, 5]

PinyinMatch.match(test, 'cengjingcanghai') // [3, 6]

PinyinMatch.match(test, 'cengjingcangha') // [3, 6]

PinyinMatch.match(test, 'engjingcanghai') // false

PinyinMatch.match(test, 'zengjingcang') // [3, 5]

PinyinMatch.match(test, 'sdjkelwqf') // false

```
