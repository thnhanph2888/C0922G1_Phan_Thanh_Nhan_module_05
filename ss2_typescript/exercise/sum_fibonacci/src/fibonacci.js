var sum = 0;
function fibonacci(x) {
    if (x <= 1) {
        return x;
    }
    return fibonacci(x - 1) + fibonacci(x - 2);
}
for (var i = 0; i < 20; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng 19 số fibonacci đầu tiên là: " + sum);
