let sum: number = 0;
function fibonacci(x: number): number {
    if (x <= 1) {
        return x;
    }
    return fibonacci(x - 1) + fibonacci(x - 2);
}
for (let i = 0; i < 20; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng 19 số fibonacci đầu tiên là: " + sum);



