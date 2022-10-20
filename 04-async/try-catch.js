const doIt = () => {
  try {
    const isSucceeded = Math.random() < 0.5;

    if  (isSucceeded) {
      console.log('Fullfilled');
    } else {
      throw 1234;
    }

    return 'Returned';
  } catch (e) {
    console.error(e, ':', typeof e);
  } finally {
    console.log('Completed');
  }
};

const result = doIt() ?? ""; // ??の左側がnullまたはundefinedの場合は右側の値を返し、そうでなければ左側の値を返す
console.log(result);
