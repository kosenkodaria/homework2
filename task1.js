function  add (x , y ) {
    let res = 0 ;
    if (x<0) {
        res = -(x) + y;
    }
    if (y<0) {
        res = x + -(y);
    }
    if (x<0 && y<0){
        res = -(y) + -(x);
    }
    if(x>0 && y>0) {
        res = x + y
    }
    return res;
}
console.log(add(-5, 8));

