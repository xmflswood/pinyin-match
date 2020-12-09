# pinyin-match

能够使用拼音快速检索目标。

1. 26.5KB (gzip => 19KB)
2. 支持多音字、拼音首字母匹配,具备分词功能
3. 覆盖 6763 个汉字
4. 返回位置信息，可用于高亮匹配字符
5. 在长多音字串下依然有高性能

在线演示：<http://119.29.39.55:8686>;

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

PinyinMatch.match(text, 'zengji ng cang') // [3, 5]

PinyinMatch.match(text, 'zengji ng cangsdjfkl') // false

PinyinMatch.match('   我 爱你 中   国   ', 'nzg') // [6, 12]

PinyinMatch.match('   我 爱你 中   国   ', '爱你中') // [5, 8]

```

## 许可证

pinyin-match is under The Star And Thank Author License (SATA)

本项目基于MIT协议发布，并增加了SATA协议
