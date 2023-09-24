export const arrayOfPromises = async () => {
  const promises = [
    Promise.resolve(1),
    Promise.resolve("Hello, World"),
    Promise.resolve(42),
  ] as const;
  const settled = await Promise.allSettled(promises);

  const processPromise = <T>(settledResult: PromiseSettledResult<T>) => {
    if (settledResult.status === "fulfilled") {
      return settledResult.value;
    } else {
      return null;
    }
  };

  type SettledValue<T> = T extends PromiseSettledResult<infer TResult>
    ? TResult
    : null;
  type AllSettledValues<T> = {
    [TKey in keyof T]: T[TKey] extends PromiseSettledResult<any>
      ? SettledValue<T[TKey]>
      : null;
  };
  type Sample = AllSettledValues<
    [
      PromiseRejectedResult,
      PromiseFulfilledResult<"One">,
      PromiseFulfilledResult<2>,
      PromiseFulfilledResult<number>
    ]
  >;

  const processPromises = <T extends ReadonlyArray<PromiseSettledResult<any>>>(
    promises: T
  ): AllSettledValues<T> => {
    return promises.map((p) => processPromise(p)) as any;
  };

  const results = processPromises(settled);
};
