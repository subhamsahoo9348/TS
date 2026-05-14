// // sumrRange


// function sumRange(num: number): number {
//     if (num === 1) return 1;
//     return num + sumRange(num - 1);
// }

// // console.log(sumRange(100));


// function factroal(num: number): number {
//     if (num === 1) return 1;
//     return num * factroal(num - 1);
// }

// // console.log(factroal(3));



// //Collect Odd value Pure recursive

// function collectOddValue(arr: number[]): number[] {

//     let newArr: number[] = [];

//     if (arr.length === 0)
//         return [];

//     if (arr[0]! % 2 === 0)
//         newArr.push(arr[0]!);

//     newArr = newArr.concat(collectOddValue(arr.slice(1)));

//     return newArr;

// }


// // fib(4) // 3 1 2 3 4
// // fib(10) // 55
// // fib(28) // 317811
// // fib(35) // 9227465

// // 4
// // 1 , 1 ,2,5

// function fib(n: number): number {

//     if (n === 1) return 1;
//     if (n === 0) return 0;

//     return fib(n - 1) + fib(n - 2);

// }

// // console.log("1:", fib(1), "=> 1");
// // console.log("2:", fib(2), "=> 1");
// // console.log("3:", fib(3), "=> 2");
// // console.log("4:", fib(4), "=> 3");
// // console.log("5:", fib(5), "=> 5");
// // console.log("6:", fib(6), "=> 8");
// // console.log("7:", fib(7), "=> 13");
// // console.log("8:", fib(8), "=> 21");
// // console.log("9:", fib(9), "=> 34");
// // console.log("10:", fib(10), "=> 55");

// // fib(1) // 1 =>1
// // fib(2) // 1 1 =>1  fib(1) + fib (0) =>1
// // fib(3) // 1 1 2 =>2  fib(2) + fib(1) => 1 + 1 =>2
// // fib(4) // 1 1 2 3 =>3  fib(3) + fib(2) = 2 + 1 = 3
// // fib(5) // 1 1 2 3 5=>5
// // fib(6) // 1 1 2 3 5 8 =>8
// // fib(7) // 1 1 2 3 5 8 13 =>13
// // fib(8) // 1 1 2 3 5 8 13 21 =>21
// // fib(9) // 1 1 2 3 5 8 13 21 34 =>34
// // fib(10)// 1 1 2 3 5 8 13 21 34 55=>55

// // reverse string


// // lot = > tol

// /*

// ['l','o','t']

// tol



// */

// function reverse(s: string): string {
// }

// console.log(reverse());

/*

o => o
ol => lo 
abc => cba     cab => cba

soap =>paos ==>   psoa paso paos

// about => 

t tu tuo 

ut

// */

// function reverse(s: string): string {
//     if (s.length <= 1) return s;
//     return reverse(s.slice(1)) + s[0]
// }

// console.log(reverse("subham"))



// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// function someRecursive(arr: number[], cb: (n: number) => boolean): boolean {
//     if (arr.length === 0)
//         return false;
//     return cb(arr[0]!) || someRecursive(arr.slice(1), cb)
// }



// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback.
//  The function returns true if a single value in the array returns true when passed to the callback.
//  Otherwise it returns false.

// const isOdd = (val: number) => val % 2 !== 0;
// const isEven = (val: number) => val % 2 === 0;
// const greaterThan10 = (val: number) => val > 10;

// // ✅ Basic TRUE cases
// console.log("1:", someRecursive([1, 2, 3, 4], isOdd), "=> true");
// console.log("2:", someRecursive([4, 6, 8, 9], isOdd), "=> true");
// console.log("3:", someRecursive([2, 4, 6, 7], isOdd), "=> true");        // odd at end
// console.log("4:", someRecursive([1, 2, 4, 6], isOdd), "=> true");        // odd at start
// console.log("5:", someRecursive([4, 6, 8], isEven), "=> true");         // all even
// console.log("6:", someRecursive([1, 2, 3], greaterThan10), "=> false");
// console.log("7:", someRecursive([1, 11, 3], greaterThan10), "=> true"); // one match

// // ❌ Basic FALSE cases
// console.log("8:", someRecursive([4, 6, 8], isOdd), "=> false");
// console.log("9:", someRecursive([4, 6, 8], greaterThan10), "=> false");
// console.log("10:", someRecursive([2, 4, 6], isOdd), "=> false");        // all even
// console.log("11:", someRecursive([1, 3, 5], isEven), "=> false");       // all odd

// // 🔢 Edge — single element
// console.log("12:", someRecursive([1], isOdd), "=> true");
// console.log("13:", someRecursive([2], isOdd), "=> false");
// console.log("14:", someRecursive([11], greaterThan10), "=> true");
// console.log("15:", someRecursive([1], greaterThan10), "=> false");

// // 🔢 Edge — empty array
// console.log("16:", someRecursive([], isOdd), "=> false");
// console.log("17:", someRecursive([], greaterThan10), "=> false");

// // 🔢 Edge — all match
// console.log("18:", someRecursive([1, 3, 5, 7], isOdd), "=> true");
// console.log("19:", someRecursive([11, 12, 13], greaterThan10), "=> true");

// // 🔢 Edge — only last element matches
// console.log("20:", someRecursive([2, 4, 6, 1], isOdd), "=> true");
// console.log("21:", someRecursive([1, 2, 4, 11], greaterThan10), "=> true");

function flatten(){
  
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3



