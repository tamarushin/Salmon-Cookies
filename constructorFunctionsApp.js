var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


 //object constructor
function Store(storeName, minCust, maxCust, avgPerCust){
   this.name = storeName;
   this.minCust = minCust;
   this.maxCust = maxCust
   this.avgPerCust = avgPerCust
   this.totalHourlySales = 0
   this.projectedHourlySales = []
}

for  (var i = 0; i < storeHours.length; i++){
   this.totalDailySales = 0
   this.projectedHourlySales = []
}

 Store.prototype.randomCustGenerator = function(){
   var random =  Math.round(Math.random() * (this.maxCust - this.minCust));
   return random;
}

 Store.prototype.hourlySales = function(){
   var random;
   for(var i = 0; i < storeHours.length; i++){
     random = this.randomCustGenerator();
     this.projectedHourlySales.push(Math.round(random * this.avgPerCust));
   }
 console.log(this)
 }

 Store.prototype.totalSalesPerDay = function(){
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

  console.log('all stores:', allStores);

for(var j = 0; j < allStores.length; j++){
   allStores[j].hourlySales();
   allStores[j].totalSalesPerDay();
}
 // var storeHours = []

  console.log(allStores)
var tData = '<td></td>';
function methodId(){
  var name;
  var el;
  var tdData2;
  var myRow2;

  console.log(storeHours.length);
for(var k = 0; k < storeHours.length; k++){
  tData = tData + '<td>' + storeHours[k] + '</td>';
  console.log(tData);
  }
 return tData;
}

tData = methodId();
  var el = document.getElementById('storeHours');
  var myRow = document.createElement('tr');
  myRow.innerHTML = tData;
  el.appendChild(myRow);

for(var j = 0; j < allStores.length; j++){

  hours = allStores[j].projectedHourlySales
  console.log(hours);
  total = allStores[j].totalDailySales
  console.log(total);
  name = allStores[j].name
  console.log (name)
  el = document.getElementById('allStores');
  tdData2 = '<td>' + name + '</td>'
  myRow2 = document.createElement('tr')
  myRow2.innerHTML = tdData2
  el.appendChild(myRow2)
}
