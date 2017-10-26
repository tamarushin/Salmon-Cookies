'use strict';

//create a var for the stores which is the object and list the properties
// var pikestore = {
//   storeName: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgPerCust: 6.3,
//   hourlySales: [],
//   totalSales = 0,
//
// }
// var seatacstore = {
//   storeName: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgPerCust: 1.2,
//   hourlySales: [],
//   totalSales = 0,
// }
// var seattlecenter = {
//   storeName: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgPerCust: 3.7,
//   hourlySales: [],
//   totalSales = 0,
// }
// var capitolhill = {
//   storeName: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgPerCust: 2.3,
//   hourlySales: [],
//   totalSales = 0,
// }
// var alki = {
//   storeName: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgPerCust: 4.6,
//   hourlySales: [],
//   totalSales: 0,
// }

//create a array with store hours for my loop
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//object constructor
  var Store = function(storeName, minCust, maxCust, avgPerCust){
     this.name = storeName;
     this.minCust = minCust;
     this.maxCust = maxCust
     this.avgPerCust = avgPerCust
     this.totalDailySales = 0
     this.projectedHourlySales = []
 }

Store.prototype.randomCustGenerator = function() {
  var random =  Math.round(Math.random() * (this.maxCust - this.minCust));
 return random;
}

Store.prototype.hourlySales = function() {
  var random;
  for(var i = 0; i < storeHours.length; i++){
    random = this.randomCustGenerator();
    this.projectedHourlySales.push(Math.round(random * this.avgPerCust));
  }
console.log(this)
}

Store.prototype.totalSalesPerDay = function() {
  var total = 0;
  for(var j = 0; j < this.projectedHourlySales.length; j++){
    total = total + this.projectedHourlySales[j];
  }
  console.log(total);
  this.totalDailySales = total;
  return total;
}

var allStores = [];

//object constructors
 var alkiStore = new Store('Alki Store', 2, 16, 4.6);
 var pikeStore = new Store('1st and Pike', 23, 65, 6.3);
 var seatacStore = new Store('Seatac Airport', 3, 24, 1.2);
 var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
 var capitolHill = new Store('Capitol Hill', 20, 38, 2.3)

allStores.push(alkiStore);
allStores.push(pikeStore);
allStores.push(seatacStore);
allStores.push(seattleCenter);
allStores.push(capitolHill);

for(var j = 0; j < allStores.length; j++){
  allStores[j].hourlySales();
  allStores[j].totalSalesPerDay();
}

console.log(allStores)
