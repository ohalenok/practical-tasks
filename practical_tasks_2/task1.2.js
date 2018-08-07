var v = require('./vehicle');

let car1 = new v.Audi("A8", 2015, 220);
console.log(car1);

let cr1 = new v.Car("Volkswagen", 1999 , 280);
console.log(cr1);
cr1.displayInfo();
cr1.transportPeople();

let tr1 = new v.Truck("Mercedes", 2002 , 200);
console.log(tr1);

let vh1 = new v.Vehicle("Diesel", 2001 , 180);
console.log(vh1);

let au1 = new v.Audi("A3", 2016 , 320);
console.log(au1);
au1.transportPeople();
au1.displayInfo();

v.Volvo.hello();