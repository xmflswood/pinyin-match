# 如果有帮助，麻烦点个Star
# 具体实现文档
https://juejin.cn/post/6844904161461403661

# pinyin-match

能够使用拼音快速检索目标。

1. 简体版27KB (gzip ≈ 19KB)，繁体版86KB (gzip ≈ 60KB)
2. 支持多音字、繁体字、拼音首字母匹配,具备分词功能
3. 返回位置信息，可用于高亮匹配字符
4. 在长多音字串下依然有高性能

在线演示：<https://xmflswood.github.io/pinyin-match/>;

## 安装

```shell
npm install pinyin-match --save
```

支持`<script>`引入

简体：`<script src="pinyin-match/dist/main.js"></script>`  

繁体：`<script src="pinyin-match/dist/traditional.js"></script>`  

使用方式：  
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

引入简体版：  
```
import PinyinMatch from 'pinyin-match';  // es  

const PinyinMatch = require('pinyin-match'); // commonjs
```  

引入繁体版(es)：  
```
import PinyinMatch from 'pinyin-match/es/traditional.js'; // es  

const PinyinMatch = require('pinyin-match/lib/traditional.js'); // commonjs
```

列表项为字符串：

```js
let test = '123曾经沧海难为水除却巫山不是云'

PinyinMatch.match(test, '23曾'); // [1, 3]

PinyinMatch.match(test, 'cjc') // [3, 5]

PinyinMatch.match(test, 'cengjingcanghai') // [3, 6]

PinyinMatch.match(test, 'cengjingcangha') // [3, 6]

PinyinMatch.match(test, 'engjingcanghai') // false

PinyinMatch.match(test, 'zengjingcang') // [3, 5]

PinyinMatch.match(test, 'sdjkelwqf') // false

PinyinMatch.match(test, 'zengji ng cang') // [3, 5]

PinyinMatch.match(test, 'zengji ng cangsdjfkl') // false

PinyinMatch.match('   我 爱你 中   国   ', 'nzg') // [6, 12]

PinyinMatch.match('   我 爱你 中   国   ', '爱你中') // [5, 8]

PinyinMatch.match('發', 'fa') // [0, 0]

```

## 许可证

MIT

## 其他语言版本  
欢迎其他语言开发者增加对应版本（标明来自本项目即可）  

### GO
https://github.com/limawanyan/go-pinyin-match

## 仓库
https://github.com/xmflswood/pinyin-match
