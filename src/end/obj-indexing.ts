type ResultOptional<T> = {
  readonly [TKey in keyof T & string as `get${TKey}`]?: T[TKey];
};
type Result<T> = {
  readonly [TKey in keyof T & string as `get${TKey}`]: T[TKey];
};

const capitalize = (s: string) => {
  return s.substring(0, 1).toUpperCase() + s.substring(1);
};

(() => {
  const functionSomething = <T>(obj: T): Result<T> => {
    const result: ResultOptional<T> = {};

    // for (const key in obj) {
    //   type KeyType = typeof key;
    //   result
    //   result[`get${capitalize(key)}`] = obj[key] as KeyType;
    // }

    return result as Result<T>;
  };

  const example = functionSomething({ numPlayers: 2 });
  example.getnumPlayers;
})();
