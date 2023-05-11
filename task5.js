
 let reverseString =  function(str) {
  let reverseString = str.split("").reverse().join("");
if ( str === reverseString){
  console.log(`${str} is a palendrom`);
}
else {
  console.log(`This is not a palendrom.`);
}
return reverseString;
}

console.log(reverseString("rotator"));