# Plan

1. What is JS
   - It is a scripting language. Does not need to be compiled and is executed by another application
   - Runs in the browser. Runs in the server
   - Code Example #1
1. Why TS?
   - Gives structure to your code. Allows you to scale (Catch errors before they happen. More devs with less confusion)
1. How TS?
   - tsc (TS compiler)
   - Code Example #1 but now with TS (#2)
   - Show how it compiles down to JS to see how types are tanspiled away
   - Webpack or any other bundler
1. Basics
   - strings, numbers, consts
   - async, await
   - functions (basics, curried functions, thunks maybe)
1. Advanced

   - Dealing with arrays
     - number[]
     - Promise<unknown>[] (You can index into an array with Type[number])
     - [string, number] (useState) (You can index into an array with a specific index Type[0] or Type[1])
   -

1. Extras
   1. Do we have to use TS?
      - No
      - There are alternatives. Deno
