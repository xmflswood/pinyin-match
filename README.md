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
PinyinMatch.match('我爱你中华人民共和国', 'nzh'); // [2, 4]

PinyinMatch.match('我爱你中华人民共和国', 'nizhonghu') // [2, 4]

PinyinMatch.match('我爱你中华人民共和国', 'nizhonghua') // [2, 4]

PinyinMatch.match('我爱你中华人民共和国', 'onghua') // false

PinyinMatch.match('我爱你中华人民共和国', 'jsdklfa') // false

PinyinMatch.match('我爱你中华人民共和国', 'nzhua') // false

```