function sort(arr: number[]): number[] {

}

function divideArray(arr: number[]): number[] {

    if (arr.length == 1)
        return arr;

    let left: number[] = [];
    let right: number[] = [];
    let newArray: number[] = [];

    const half = Math.floor(arr.length / 2);

    left = arr.slice(0, half);
    right = arr.slice(half, arr.length);

    newArray = sortMultiArray(left, right);

    return newArray;
}

function sortMultiArray(left: number[], right: number[]): number[] {
    const newArray: number[] = [];

    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        const leftValue = left[i]!;
        const rightValue = right[j]!;
        if (leftValue <= rightValue) {
            newArray.push(leftValue);
            i++;
        } else {
            newArray.push(rightValue);
            j++;
        }
    }
    while (i < left.length || j < right.length) {
        const leftValue = left[i]!;
        const rightValue = right[j]!;
        if (i < left.length) {
            newArray.push(leftValue);
            i++;
        }
        if (j < right.length) {
            newArray.push(rightValue);
            j++;
        }

    }

    return newArray;
}

console.log(sortMultiArray([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]))


/* 


[3, 1, 4, 2]


                                                    [3, 1, 4, 2]
                                                    
                                    [3, 1]                              [4, 2]
                                                    
                             [3]   [1]                                    [4]     [2]

[1,3]        [2,4]

[1,2,3,4]





[5, 2, 8, 1]



 */