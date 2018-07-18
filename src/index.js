const dict = require('./pinyin_dict_notone').pinyin_dict_notone
const allPinyin = require('./pinyin_dict_notone').allPinyin
const notone = parseDict()
let storage = {}
function parseDict() {
  let parseDict = {}
  for (let i in dict) {
    let temp = dict[i]
    for (let j = 0, len = temp.length; j < len; j++) {
      if (!parseDict[temp[j]]) {
        parseDict[temp[j]] = i
      } else {
        parseDict[temp[j]] = parseDict[temp[j]] + ' ' + i
      }
    }
  }
  return parseDict
}

function getPinyin(cn) {
  let result = []
  for (let i = 0, len = cn.length; i < len; i ++) {
    let temp = cn.charAt(i)
    result.push(notone[temp] || temp)
  }
  return result
}

function wordBreak(s) {
  let result = []
  let solutions = []
  let len = s.length
  let possible = []
  for (let i = 0; i <= s.length; i++) {
    possible.push(true)
  }
  getAllSolutions(0, s, result, solutions, possible)
  return solutions
}

function getAllSolutions(start, s, result, solutions, possible) {
  if (start === s.length) {
    solutions.push(result.join(' '))
    return
  }
  for (let i = start; i < s.length; i++) {
    let piece = s.substring(start, i + 1)
    let match = false
    if (allPinyin.some(i => i.indexOf(piece) === 0) && !s[i + 1] && possible[i + 1]) {
      if (piece.length === 1) {
        result.push(piece)
      } else {
        let s = []
        allPinyin.forEach(i => {
          if (i.indexOf(piece) === 0) {
            s.push(i)
          }
        })
        result.push(s)
      }
      match = true
    } else {
      if (allPinyin.indexOf(piece) !== -1 && possible[i + 1]) {
        result.push(piece)
        match = true
      }
    }
    if (match) {
      let beforeChange = solutions.length
      getAllSolutions(i + 1, s, result, solutions, possible)
      if (solutions.length === beforeChange) {
        possible[i + 1] = false
      }
      result.pop()
    }
  }
}

function getFullKey(key) {
  let result = []
  wordBreak(key).forEach(i => {
    let item = i.split(' ')
    let last = item.length - 1
    if (item[last].indexOf(',')) {
      let keys = item[last].split(',')
      keys.forEach(j => {
        item.splice(last, 1, j)
        result.push(JSON.parse(JSON.stringify(item)))
      })
    } else {
      result.push(item)
    }
  })
  if (result.length === 0 || (result[0].length !== key.length)) {
    result.push(key.split(''))
  }
  storage = {[key]: result}
  return result
}

function point2point(test, key, last, extend) {
  let a = test.split(' ')
  a.forEach(i => {
    if (i.length > 0 && extend) {
      a.push(i.charAt(0))
    }
  })
  if (!last) {
    return a.indexOf(key) !== -1
  }
  return a.some((i) => i.indexOf(key) === 0)
}

function match(input, keys) {
  input = input.toLowerCase()
  keys = keys.toLowerCase()
  let indexOf = input.indexOf(keys)
  if (indexOf !== -1) {
    return [indexOf, indexOf + keys.length - 1]
  }
  let py = getPinyin(input)
  let pyLength = py.length
  let fullString = storage[keys] || getFullKey(keys)
  for (let k = 0; k < fullString.length; k++) {
    let key = fullString[k]
    let keyLength = key.length
    let extend = keyLength === keys.length
    if (keyLength <= pyLength) {
      for (let temp = 0; ;) {
        if (pyLength - temp >= keyLength) {
          let isMatch = true
          let i = 0
          for (; i < key.length; i += 1) {
            if (!point2point(py[temp + i], key[i], (py[temp + i + 1] && key[i + 1]) ? false : true, extend)) {
              temp = temp + 1
              isMatch = false
              break
            }
          }
          if (isMatch) {
            return [temp, temp + i - 1]
          }
        } else {
          break
        }
      }
    }
  }
  return false
}
const pinyin = {
  match
}
module.exports = pinyin
