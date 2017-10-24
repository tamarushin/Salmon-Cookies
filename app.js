var princess = {
  name: 'Tama',
  Born: 'Boulder',
  brotherskids: ['Emily', 'Annabelle','Ronnie', 'Lydia'],
  brotherskidsages: [
    {
      Emily: 18
    },{
      Annabelle: 6
    },{
      Ronnie: 3
    },{
      Lydia: 3
    },
  ]
}

console.log(princess)

var getBorn = function() {
  return 'this princess was born in ' + this.born + ' Colorado';
}


var EpicFailVideo = function(epicRating, hasAnimals) {
  this.epicRating = epicRating;
  this.hasAnimals = hasAnimals;
}

var parkourFail = new EpicFailVideo(7, false);
var CorgiFail = new EpicFailVideo(4, true);

console.log('parkour', parkourFail);
console.log('corgi', corgiFail);

var EpicFailVideo = function(epicRating, hasAnimals) {
  this.epicRating = epicRating;
  this.hasAnimals = hasAnimals;
}

EpicFailVideo.prototype.generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var parkourFail = new EpicFailVideo(7, false);
var corgiFail = new EpicFailVideo(4, true);

console.log(parkourFail.generateRandom(1, 5));
console.log(corgiFail.generateRandom(1, 5));
var EpicFailVideo = function(epicRating, hasAnimals) {
  this.epicRating = epicRating;
  this.hasAnimals = hasAnimals;
}

 EpicFailVideo.prototype.generateRandom = function(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 EpicFailVideo.prototype.dailyLikes = function() {
   var viewers, percentage;

   viewers = this.generateRandom(10, 30) * this.epicRating;

   if (this.hasAnimals) {
     percentage = 0.75;
   } else {
     percentage = 0.40;
   }

   return Math.round(viewers * percentage);
 }

 var parkourFail = new EpicFailVideo(7, false);
 var corgiFail = new EpicFailVideo(4, true);

 console.log(parkourFail.dailyLikes());
 console.log(corgiFail.dailyLikes());


  function SalmonCookieStore(storeLocation, hoursOpen, min, max, avg,) {
    this.name = storeLocation;
    this.minCustomer = min;
    this.maxCustomer = max;
    this.avgCookie = avg;

    this.hourlySales = [];
    this.totalSales = 0;
  };
