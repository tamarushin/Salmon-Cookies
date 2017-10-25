'use strict';

//create a var for the stores which is the object and list the properties
var pikestore = {
  storeName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgPerCust: 6.3,
}
var seatacstore = {
  storeName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgPerCust: 1.2,
}
var seattlecenter = {
  storeName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgPerCust: 3.7,
}
var capitolhill = {
  storeName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgPerCust: 2.3,
}
var alki = {
  storeName: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgPerCust: 4.6,
}

//create a array with store hours for my loop
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//object literals
  var HourlyCustomers = function(storeName, minCust, maxCust, avgPerCust){
     this.name = storeName;
     this.minCust = minCust;
     this.maxCust = maxCust
     this.avgPerCust = avgPerCust
     var totalHourlySales = 0
     var projectedHourlySales = []

 for  (var i = 0; i < storeHours.length; i++)
 }

//object constructors
 var alki = new HourlyCustomers('Alki Store', 2, 16, 4.6);
 var pikestore = new HourlyCustomers('1st and Pike', 23, 65, 6.3);
 var seatacstore = new HourlyCustomers('Seatac Airport', 3, 24, 1.2);
 var seattlecenter = new HourlyCustomers('Seattle Center', 11, 38, 3.7);
 var capitolhill = new HourlyCustomers('Capitol Hill', 20, 38, 2.3)


  {

}
var storeHours = []
