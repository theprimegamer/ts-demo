type ResultOptional<T extends readonly unknown[]> = {
  -readonly [TKey in keyof T & string as `static${TKey}`]?: T[TKey];
};
type Result<T extends readonly unknown[]> = {
  -readonly [TKey in keyof T & string as `static${TKey}`]: T[TKey];
};

(() => {
  const functionSomething = <const T extends readonly any[]>(
    arr: T
  ): Result<T> => {
    const result: ResultOptional<T> = {};
    for (const key in arr) {
      result[`static${key}`] = arr[key];
    }

    return result as Result<T>;
  };

  const example = functionSomething([1, "asd"]);
  const static0 = example.static0;
  const static1 = example.static1;
})();
