const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function defaultCompare(a, b) {
    if (a === b) { 
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; 
}

function bubbleSort(array, compareFn = defaultCompare) {
    const { length } = array; 
    for (let i = 0; i < length; i++) { 
        for (let j = 0; j < length - 1; j++) { 
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) { 
                swap(array, j, j + 1); 
            }
        }
    }
    return array;
}
function swap(array, a, b) {
    /* const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */ // 经典方式
    [array[a], array[b]] = [array[b], array[a]]; // ES2015 的方式
}
let a = [5, 4, 3, 2, 1];
console.log(a);
a = bubbleSort(a);
console.log(a);
