declare namespace Pinyin {
  export function match(input: string, keys: string): [number, number] | false;
}

export as namespace Pinyin;
export default Pinyin;
