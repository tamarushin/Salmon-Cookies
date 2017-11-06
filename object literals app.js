'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//create a var for the stores which is the object and list the properties
var pikeStore = {
  storeName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgPerCust: 6.3,
  hourlySales: [],
  totalSales: 0,
  //create a random number generator to round off the decimals to the nearest integer and subtract min customers from Max customers.
  generateRandomNumber: function(){
    return Math.round(Math.random() * this.maxCust) - Math.round(Math.random() * this.minCust)
  },
  generateHourlySales: function(){
    for(var i = 0; i < storeHours.length; i++){
    var rand = Math.floor(this.generateRandomNumber() * this.avgPerCust);
      this.hourlySales.push(rand);
      this.totalSales = this.totalSales + rand;
  }
  return;
}
}
console.log("random number", pikeStore.generateRandomNumber(), pikeStore.generateHourlySales(), pikeStore);

var seatacStore = {
  storeName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgPerCust: 1.2,
  hourlySales: [],
  totalSales: 0,
  generateRandomNumber: function(){
    return Math.round(Math.random() * this.maxCust) - Math.round(Math.random() * this.minCust)
  },
  generateHourlySales: function(){
    for(var i = 0; i < storeHours.length; i++){
    var rand = Math.floor(this.generateRandomNumber() * this.avgPerCust);
      this.hourlySales.push(rand);
      this.totalSales = this.totalSales + rand;
  }
  return;
}
}
  console.log("random number", seatacStore.generateRandomNumber(), seatacStore.generateHourlySales(), seatacStore);

var seattleCenter = {
  storeName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgPerCust: 3.7,
  hourlySales: [],
  totalSales: 0,
  generateRandomNumber: function(){
    return Math.round(Math.random() * this.maxCust) - Math.round(Math.random() * this.minCust)
  },
  generateHourlySales: function(){
    for(var i = 0; i < storeHours.length; i++){
    var rand = Math.floor(this.generateRandomNumber() * this.avgPerCust);
      this.hourlySales.push(rand);
      this.totalSales = this.totalSales + rand;
  }
  return;
}
}
  console.log("random number", seattleCenter.generateRandomNumber(), seattleCenter.generateHourlySales(), seatacStore);

var capitolHill = {
  storeName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgPerCust: 2.3,
  hourlySales: [],
  totalSales: 0,
  generateRandomNumber: function(){
    return Math.round(Math.random() * this.maxCust) - Math.round(Math.random() * this.minCust)
  },
  generateHourlySales: function(){
    for(var i = 0; i < storeHours.length; i++){
    var rand = Math.floor(this.generateRandomNumber() * this.avgPerCust);
      this.hourlySales.push(rand);
      this.totalSales = this.totalSales + rand;
  }
  return;
}
}
  console.log("random number", capitolHill.generateRandomNumber(), capitolHill.generateHourlySales(), seatacStore);

var alkiStore = {
  storeName: 'Alki Store',
  minCust: 2,
  maxCust: 16,
  avgPerCust: 4.6,
  hourlySales: [],
  totalSales: 0,
  generateRandomNumber: function(){
    return Math.round(Math.random() * this.maxCust) - Math.round(Math.random() * this.minCust)
  },
  generateHourlySales: function(){
    for(var i = 0; i < storeHours.length; i++){
    var rand = Math.floor(this.generateRandomNumber() * this.avgPerCust);
      this.hourlySales.push(rand);
      this.totalSales = this.totalSales + rand;
  }
  return;
}
}
  console.log("random number", alkiStore.generateRandomNumber(), alkiStore.generateHourlySales(), seatacStore);
