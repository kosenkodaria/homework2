function check (x){
    let res = 0;
    if (x % 2 === 0){
        res = x **2;
    }
    if (x % 2 !== 0){
        res = x ** 3;
    }
    return res;
}
console.log(check(2));