function getAverage (a,b,c,d) {
    var average = (a+b*c-d) / 2; //local variable
    console.log(average);
    return average;
}
var myResult = getAverage(7, 12, 8, 3); //global variable



function logResult() {
    console.log('the avarage is ' +myResult + ' inside the function');
}
logResult();