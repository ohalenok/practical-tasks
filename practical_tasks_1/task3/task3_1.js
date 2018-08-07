let last = function(array, n) { 
    if (array == null)
        return void 0;
    if (n == null)
        return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
}

console.log(last([6,8,0,2]));
console.log(last([88,78,-76,12]));