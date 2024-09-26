import { dict } from './simplified_dict.js'
import { init, getPinyin } from './core.js'

const pinyin = {
	match: init(dict),
	getPin: getPinyin
}

export default pinyin