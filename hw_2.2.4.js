function postIncrementCount(x) {
    x++;
    return x;
} 

function preDecrementCount(y) {
    --y;
    return y;
}

console.log(postIncrementCount(5));
console.log(preDecrementCount(6));