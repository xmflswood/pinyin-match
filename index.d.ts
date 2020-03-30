declare namespace Pinyin {
  export function match(input: string, keys: string): [number, number] | boolean;
}

export as namespace Pinyin;
export = Pinyin;
