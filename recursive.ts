// // // sumrRange


// // function sumRange(num: number): number {
// //     if (num === 1) return 1;
// //     return num + sumRange(num - 1);
// // }

// // // console.log(sumRange(100));


// // function factroal(num: number): number {
// //     if (num === 1) return 1;
// //     return num * factroal(num - 1);
// // }

// // // console.log(factroal(3));



// // //Collect Odd value Pure recursive

// // function collectOddValue(arr: number[]): number[] {

// //     let newArr: number[] = [];

// //     if (arr.length === 0)
// //         return [];

// //     if (arr[0]! % 2 === 0)
// //         newArr.push(arr[0]!);

// //     newArr = newArr.concat(collectOddValue(arr.slice(1)));

// //     return newArr;

// // }


// // // fib(4) // 3 1 2 3 4
// // // fib(10) // 55
// // // fib(28) // 317811
// // // fib(35) // 9227465

// // // 4
// // // 1 , 1 ,2,5

// // function fib(n: number): number {

// //     if (n === 1) return 1;
// //     if (n === 0) return 0;

// //     return fib(n - 1) + fib(n - 2);

// // }

// // // console.log("1:", fib(1), "=> 1");
// // // console.log("2:", fib(2), "=> 1");
// // // console.log("3:", fib(3), "=> 2");
// // // console.log("4:", fib(4), "=> 3");
// // // console.log("5:", fib(5), "=> 5");
// // // console.log("6:", fib(6), "=> 8");
// // // console.log("7:", fib(7), "=> 13");
// // // console.log("8:", fib(8), "=> 21");
// // // console.log("9:", fib(9), "=> 34");
// // // console.log("10:", fib(10), "=> 55");

// // // fib(1) // 1 =>1
// // // fib(2) // 1 1 =>1  fib(1) + fib (0) =>1
// // // fib(3) // 1 1 2 =>2  fib(2) + fib(1) => 1 + 1 =>2
// // // fib(4) // 1 1 2 3 =>3  fib(3) + fib(2) = 2 + 1 = 3
// // // fib(5) // 1 1 2 3 5=>5
// // // fib(6) // 1 1 2 3 5 8 =>8
// // // fib(7) // 1 1 2 3 5 8 13 =>13
// // // fib(8) // 1 1 2 3 5 8 13 21 =>21
// // // fib(9) // 1 1 2 3 5 8 13 21 34 =>34
// // // fib(10)// 1 1 2 3 5 8 13 21 34 55=>55

// // // reverse string


// // // lot = > tol

// // /*

// // ['l','o','t']

// // tol



// // */

// // function reverse(s: string): string {
// // }

// // console.log(reverse());

// /*

// o => o
// ol => lo 
// abc => cba     cab => cba

// soap =>paos ==>   psoa paso paos

// // about => 

// t tu tuo 

// ut

// // */

// // function reverse(s: string): string {
// //     if (s.length <= 1) return s;
// //     return reverse(s.slice(1)) + s[0]
// // }

// // console.log(reverse("subham"))



// // SAMPLE INPUT / OUTPUT
// // const isOdd = val => val % 2 !== 0;

// // someRecursive([1,2,3,4], isOdd) // true
// // someRecursive([4,6,8,9], isOdd) // true
// // someRecursive([4,6,8], isOdd) // false
// // someRecursive([4,6,8], val => val > 10); // false

// // function someRecursive(arr: number[], cb: (n: number) => boolean): boolean {
// //     if (arr.length === 0)
// //         return false;
// //     return cb(arr[0]!) || someRecursive(arr.slice(1), cb)
// // }



// // someRecursive
// // Write a recursive function called someRecursive which accepts an array and a callback.
// //  The function returns true if a single value in the array returns true when passed to the callback.
// //  Otherwise it returns false.

// // const isOdd = (val: number) => val % 2 !== 0;
// // const isEven = (val: number) => val % 2 === 0;
// // const greaterThan10 = (val: number) => val > 10;

// // // ✅ Basic TRUE cases
// // console.log("1:", someRecursive([1, 2, 3, 4], isOdd), "=> true");
// // console.log("2:", someRecursive([4, 6, 8, 9], isOdd), "=> true");
// // console.log("3:", someRecursive([2, 4, 6, 7], isOdd), "=> true");        // odd at end
// // console.log("4:", someRecursive([1, 2, 4, 6], isOdd), "=> true");        // odd at start
// // console.log("5:", someRecursive([4, 6, 8], isEven), "=> true");         // all even
// // console.log("6:", someRecursive([1, 2, 3], greaterThan10), "=> false");
// // console.log("7:", someRecursive([1, 11, 3], greaterThan10), "=> true"); // one match

// // // ❌ Basic FALSE cases
// // console.log("8:", someRecursive([4, 6, 8], isOdd), "=> false");
// // console.log("9:", someRecursive([4, 6, 8], greaterThan10), "=> false");
// // console.log("10:", someRecursive([2, 4, 6], isOdd), "=> false");        // all even
// // console.log("11:", someRecursive([1, 3, 5], isEven), "=> false");       // all odd

// // // 🔢 Edge — single element
// // console.log("12:", someRecursive([1], isOdd), "=> true");
// // console.log("13:", someRecursive([2], isOdd), "=> false");
// // console.log("14:", someRecursive([11], greaterThan10), "=> true");
// // console.log("15:", someRecursive([1], greaterThan10), "=> false");

// // // 🔢 Edge — empty array
// // console.log("16:", someRecursive([], isOdd), "=> false");
// // console.log("17:", someRecursive([], greaterThan10), "=> false");

// // // 🔢 Edge — all match
// // console.log("18:", someRecursive([1, 3, 5, 7], isOdd), "=> true");
// // console.log("19:", someRecursive([11, 12, 13], greaterThan10), "=> true");

// // // 🔢 Edge — only last element matches
// // console.log("20:", someRecursive([2, 4, 6, 1], isOdd), "=> true");
// // console.log("21:", someRecursive([1, 2, 4, 11], greaterThan10), "=> true");

// type NestArray = (number | NestArray)[]


// function flatten(nestedArray: NestArray): number[] { // [1, 2, 3, [4, 5]]
//     let flatArr: number[] = [];
//     if (nestedArray.length === 0)
//         return [];

//     const first = nestedArray[0];

//     if (first === undefined) return [];

//     if (Array.isArray(first))
//         flatArr.push(...flatten(first));

//     else if (!isNaN(first))
//         flatArr.push(first);

//     flatArr.push(...flatten(nestedArray.slice(1)));

//     return flatArr;

// }

// flatten([1, 2, 3, [4, 5]])            // [1, 2, 3, 4, 5]
// // console.log("2:", flatten([1, [2, [3, 4], [[5]]]]))         // [1, 2, 3, 4, 5]
// // console.log("3:", flatten([[1], [2], [3]]))                    // [1, 2, 3]
// // console.log("4:", flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1, 2, 3]

// // // 🔢 Edge — empty
// // console.log("5:", flatten([]))                              // []
// // console.log("6:", flatten([[]]))                            // []
// // console.log("7:", flatten([[], [], []]))                    // []

// // // 🔢 Edge — single element
// // console.log("8:", flatten([1]))                             // [1]
// // console.log("9:", flatten([[1]]))                           // [1]
// // console.log("10:", flatten([[[1]]]))                        // [1]

// // // 🔢 Edge — already flat
// // console.log("11:", flatten([1, 2, 3, 4, 5]))               // [1, 2, 3, 4, 5]

// // // 🔢 Edge — all nested
// // console.log("12:", flatten([[1], [2], [3], [4], [5]]))      // [1, 2, 3, 4, 5]

// // // 🔢 Edge — mixed depth
// // console.log("13:", flatten([1, [2, 3], 4, [5, [6, 7]]]))   // [1, 2, 3, 4, 5, 6, 7]
// // console.log("14:", flatten([[1, 2], [3, [4, 5]]]))          // [1, 2, 3, 4, 5]

// // // 🔢 Edge — deeply nested single values
// // console.log("15:", flatten([[[[[1]]]]]))                    // [1]
// // console.log("16:", flatten([[[[[1]]], [[2]]]]))              // [1, 2]

// function capitalizeFirst(sArray: string[]): string[] {

//     let CapArray: string[] = [];

//     let firstString = sArray[0]![0]?.toLocaleUpperCase();

//     CapArray = [firstString + sArray[0]!.slice(1)];

//     if (sArray.length === 1) {



//         return CapArray;
//     }

//     CapArray.push(...capitalizeFirst(sArray.slice(1)));

//     return CapArray;

// }

// console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']




// type AT = number | string | boolean;

// interface nestedObject {
//     [k: string]: AT | nestedObject
// }



// function nestedEvenSum(obj: nestedObject): number {
//     const keys = Object.keys(obj);
//     let sum = 0;
//     for (const key of keys) {
//         const val = obj[key];
//         if (isPlainObject(val)) {
//             sum += nestedEvenSum(val as nestedObject);
//         }
//         if (typeof val === 'number' && (val % 2) === 0)
//             sum += val;
//     }

//     return sum;
// }

// // for nestedEvenSum you only care about plain objects
function isPlainObject(val: unknown): boolean {
    return typeof val === 'object' &&
        val !== null &&
        !Array.isArray(val);
}


// var obj1 = {
//     outer: 2,
//     obj: {
//         inner: 2,
//         otherObj: {
//             superInner: 2,
//             notANumber: true,
//             alsoNotANumber: "yup"
//         }
//     }
// }

// var obj2 = {
//     a: 2,
//     b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//     c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
//     d: 1,
//     e: { e: { e: 2 }, ee: 'car' }
// };

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10


// function capitalizeWords(sArray: string[]): string[] {

//     let CapArray: string[] = [];

//     let firstString = sArray[0]!.toLocaleUpperCase();

//     CapArray = [firstString];

//     if (sArray.length === 1) {

//         return CapArray;
//     }

//     CapArray.push(...capitalizeWords(sArray.slice(1)));

//     return CapArray;

// }


// console.log(capitalizeWords(['dytrdyr', 'hej', 'dytrdyr']))


// /*
// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }
// /*

// stringifyNumbers(obj)

// /*
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }


// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds
//  all of the values which are numbers and converts them to strings.
//   Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers converted to strings,
//  and not modify the original. Keep the original object unchanged.
// */


// type ATExtend = string | boolean;

// interface nestedObject2 {
//     [k: string]: ATExtend | nestedObject
// }


// function stringifyNumbers(obj: nestedObject): nestedObject2 {
//     const keys = Object.keys(obj);
//     const output: nestedObject2 = {};

//     for (const key of keys) {
//         const val = obj[key];
//         if (isPlainObject(val)) {
//             output[key] = stringifyNumbers(val as nestedObject);
//         }
//         else if (typeof val === 'number')
//             output[key] = String(val);
//         else {
//             output[key] = val as ATExtend; 
//         }
//     }

//     return output;
// }

// var obj1 = {
//     outer: 2,
//     obj: {
//         inner: 2,
//         otherObj: {
//             superInner: 2,
//             notANumber: true,
//             alsoNotANumber: "yup"
//         }
//     }
// }

// var obj2 = {
//     a: 2,
//     b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//     c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
//     d: 1,
//     e: { e: { e: 2 }, ee: 'car' }
// };

// console.log(stringifyNumbers(obj1)); // 6
// console.log(stringifyNumbers(obj2)); // 10


/*

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])



*/

type AT = number | string | boolean;

interface nestedObject {
    [k: string]: AT | nestedObject
}

function collectStrings(obj: nestedObject): string[] {
    const keys = Object.keys(obj);
    let aArray:string[] = [];
    for (const key of keys) {
        const val = obj[key];
        if (isPlainObject(val)) {
            aArray.push(...collectStrings(val as nestedObject));
        }
        else if (typeof val === 'string')
           aArray.push(val);
    }

    return aArray;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])