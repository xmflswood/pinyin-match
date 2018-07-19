const assert = require('assert')
const PinyinMatch = require('../src/index')
let text = '123曾经沧海难为水除却巫山不是云'

describe('PinyinMatch', () => {
  describe('#match', () => {
    it('精准匹配', () => {
      assert.deepEqual([1, 3], PinyinMatch.match(text, '23曾'))
    })
    it('首字母匹配', () => {
      assert.deepEqual([3, 5], PinyinMatch.match(text, 'cjc'))
    })
    it('完整拼音匹配', () => {
      assert.deepEqual([3, 6], PinyinMatch.match(text, 'cengjingcanghai'))
    })
    it('最后一个拼音不完整', () => {
      assert.deepEqual([3, 6], PinyinMatch.match(text, 'cengjingcangha'))
    })
    it('分词功能', () => {
      assert.equal(false, PinyinMatch.match(text, 'engjing'))
    })
    it('多音字', () => {
      assert.deepEqual([3, 5], PinyinMatch.match(text, 'zengjingcang'))
    })
  })
})
