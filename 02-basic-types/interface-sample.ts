interface Color {
  readonly rgb: string; // readonly 書き換え不可
  opacity: number;
  alias?: string; //  property? 省略可能
}

const tq: Color = { rgb: '00afcc', opacity: 1 };
tq.alias = 'turquoise';
tq.rgb = '03c1ff';