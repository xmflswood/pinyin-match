// 对输入拼音进行切分
function wordBreak(s) {
  let result = [] // 当前处理的结果
  let solutions = [] // 保存完整的结果
  getAllSolutions(0, s, result, solutions)
  return solutions
}
  
function getAllSolutions(start, s, result, solutions, possible) {
  if (start === s.length) { // 后续没有s，即找到了命中结果，存如solutions
    solutions.push(result.join(' '))
    return
  }
  for (let i = start; i < s.length; i++) {
    let piece = s.substring(start, i + 1)
    if (dict.indexOf(piece) !== -1 && possible[i + 1]) {
      result.push(piece)
      let beforeChange = solutions.length // 记录下当前结果的长度，等下一次getAllSolutions返回，如果没变化，说明后续找不到结果
      getAllSolutions(i + 1, s, result, solutions, possible) // 命中一个词，向后找（递归该方法即可）
      if (solutions.length === beforeChange) {
        possible[i + 1] = false
      }
      result.pop() // 回溯到上一次结果 然后往后找
    }
  }
}