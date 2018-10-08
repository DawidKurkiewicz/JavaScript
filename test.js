function getAverage (a,b,c,d) {
    var average = (a+b*c-d) / 2;
    console.log(average);
    return average;
}
var myResult = getAverage(7, 12, 8, 3)
console.log('the average is ' + myResult)
