const users =['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
 

const nameLength = function(user){
    const shortnames = [];
    users.forEach(namelength => {
        if (namelength.length < 5 ) {
        shortnames.push(namelength);
    }
});
    return shortnames;
   
} 
console.log(nameLength());

