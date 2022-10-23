// 関数宣言
{
    function add(n: number, m: number): number {
    return n + m;
  }
  console.log(add(2, 4)); // 6
}

// 関数式
{
  const add = function(n: number, m: number): number {
    return n + m;
  };
  console.log(add(5, 7)); // 12
}

// アロー関数式
{
  const add = (n: number, m: number): number => n + m;
  const hello = (): void => { // 返り値を返さない場合、返り値の型はvoid
    console.log('Hello!');
  };

  console.log(add(8, 1)); // 9
  hello(); // Hello!
}
