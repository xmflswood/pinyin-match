import { dict } from './traditional_dict'
import { init, getPinyin } from './core'

const pinyin = {
	match: init(dict),
	getPin: getPinyin
}

export default pinyin