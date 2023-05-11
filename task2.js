function add2(x , y) {
    let res = 0;
    if (x > 0 && y >0) {
        res = x + y;
    }
    if (x < 0 || y < 0) {
        console.log(`There is negative number.`);
    }
    return res;
}
console.log(add2(2 , -4));