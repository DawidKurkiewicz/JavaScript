
var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log('driver name is ' + this.driver);
    };
}
var myCar = new Car (70, 'ninja1mam');
var myCar2 = new Car (75, 'ninja2mam');
var myCar3 = new Car (78, 'ninj3amam');
var myCar4 = new Car (79, 'ninja4mam');

myCar.drive(30,5);
myCar3.logDriver();