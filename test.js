var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getTime());

if(birthday.getTime == birthday2.getTime){
    console.log('equal');
} else {
    console.log('not equal');
}