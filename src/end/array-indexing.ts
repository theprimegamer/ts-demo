type ResultOptional<T extends ReadonlyArray<unknown>> = {
  readonly [TKey in keyof T]?: T[TKey];
};
type Result<T extends ReadonlyArray<unknown>> = {
  readonly [TKey in keyof T]: T[TKey];
};

(() => {
  const functionSomething = <const T extends ReadonlyArray<unknown>>(
    arr: T
  ): Result<T> => {
    const result: ResultOptional<T> = arr.map((a) => a);

    return result as Result<T>;
  };

  const example = functionSomething([1, "asd", () => true]);
  const static0 = example[0];
  const static1 = example[1];
  const static2 = example[2];
})();

export const makeMeAModule = "module";
