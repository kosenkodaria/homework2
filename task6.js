const myCar = {
    make: 'Honda',
    model: 'Civic',
    popular: false,
    mileage: 89425
}

function check (){
    if (myCar.popular === false ){
        console.log(`Your Honda Civic is not popular.`);
    }
    else {
        console.log(`Your Honda Civic is popular.`);
    }
    if (myCar.mileage > 100000) {
        console.log(`It is not covered by warranty anymore!`);
    }
    else {
        console.log(`It is covered by warranty!`);
    }
}
console.log(check());