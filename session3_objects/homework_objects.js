/*
 Objects Comparison by property
 1 Write a function compareObjects
    that takes two objects and the name of the numeric property by which you want to perform a comparison of the objects,
    and outputs to the console the object's name whose property's value is the biggest.
 2 Create an object by literals and another one by constructor
 3 Call comparison function and pass into it both objects and property name
 */

var obj1, obj2,
    attributeName = 'attr';

function compareObjects(obj1, obj2, attribute) {
    var message = 'values are equal';
    if (obj1[attribute] > obj2[attribute]) {
        message = obj1.name;
    } else if (obj1[attribute] < obj2[attribute]) {
        message = obj2.name;
    }

    console.log(message);
}

function CreateObject(name) {
    this.attr = 3;
    this.name = name;
}

obj1 = {name: 'obj1', attr: 5};

obj2 = new CreateObject('obj2');

compareObjects(obj1, obj2, 'attr');

/*
 Favorite song search
 1 Create collection of 5 songs. Each song contains attributes: played - auditions number, name - song's name
 2 Write a function favoriteSong that receives songs collection and returns info: song.name, song.played, song's index in collection
 3 Call the function and pass the created collection.
 */
var songsCollection = [], song = {};
for (var i = 0; i < 5; i++) {
    song = {
        name: 'song' + (i + 1),
        played: Math.floor(Math.random() * 10)
    };
    songsCollection.push(song);
}

function favoriteSong(songs) {
    var favoriteSong, favoriteIndex;
    favoriteSong = songs.reduce(function(previous, current){
        return current.played > previous.played ? current : previous;
    });
    favoriteIndex = songs.indexOf(favoriteSong);
    console.log(favoriteSong.name, favoriteSong.played, favoriteIndex);
}

favoriteSong(songsCollection);

/*
 Calculator class
 1 Define Calculator Constructor with 2 methods:
    add - receives number and adds it to previous,
    getCurrentSum - receives index and return sum of numbers (via iteration index if index is defined),
 2 Create 2 exemplars of Calculator class
 3 Add numbers 3,8,11 to the first exemplar and numbers 5,12,17 to the second one
 4 Log out to console:
   - sum of all numbers of all objects, // 56
   - sum of numbers of all objects after 2 iterations // 28
   - sum of numbers for an exemplar after 3 iterations and sum of all numbers for the same exemplar (must be equal)
 */

var calc1 = new Calculator([3,8,11]);
var calc2 = new Calculator([5,12,17]);


function Calculator(numbersArray){
    var sum = 0;
    var numbers = numbersArray || [];
    this.add = add;
    this.getCurrentSum = getCurrentSum;

    function add(a) {
        sum += a;
    }

    function getCurrentSum(index) {
        sum = 0;
        var numbersToSum = index === undefined ? numbers : numbers.slice(0, index);
        numbersToSum.forEach(function(item) {
            add(item);
        });
        return sum;
    }
}

console.log(calc1.getCurrentSum() + calc2.getCurrentSum());
console.log(calc1.getCurrentSum(2) + calc2.getCurrentSum(2));
console.log(calc1.getCurrentSum(), calc1.getCurrentSum(3));

/*
 Buying a car (part 1)
    1 Create a class the Garage, which stores a list of machines, with the following interface:
        addCar - takes the Car class object
        getCar - takes the index of the car and returned to the requesting machine
        count - returns the number of cars in the garage
    2 Create a Car class that can be initialized by values of ​​model, manufacturer and price.
    3 Create a class Buyer that can be initialized by garage object and a numeric value of budget, with methods:
        getBudget - returns the current budget,
        buyCar - takes the Car class object and looks, whether budget is enough to buy the car,
         - If not enough, throws error,
         - If enough, withdraws money from the budget and adds the car in the garage.
    4 Create a function ShowRoom that takes an object buyer and then creates a car object with a random value in the price in the cycle 10 times.
      Buyer object tries to buy each car.
    5 Create an instance of the Garage and the Buyer. Call the function and pass the buyer in showRoom.
    6 When the function run is completed, print a list of all machines that the buyer has bought
*/
var garage = new Garage(),
    buyer = new Buyer(garage, 200),
    bought = [];

showRoom(buyer);

buyer.garage.carsList.forEach((car) => bought.push(car.model));
console.log(bought);


function Garage() {
    this.carsList = [];
    this.addCar = addCar;
    this.getCar = getCar;
    this.count = count;

    /**
     * @param {Object} carInst
     */
    function addCar(carInst) {
        this.carsList.push(carInst);
    }

    /**
     * @param {number} carIndex
     * @return {Object}
     */
    function getCar(carIndex) {
        return this.carsList[carIndex];
    }

    /**
     * @return {number}
     */
    function count() {
        var counter = 0;
        carsList.forEach(() => counter++);
        return counter;
    }
}

function Car(model, manufacturer, price) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.price = price;
}

/**
 * @param {Object} garageInst
 * @param {number} budget
 * @constructor
 */
function Buyer(garageInst, budget) {
    this.garage = garageInst;
    this.budget = budget;
    this.getBudget = getBudget;
    this.buyCar = buyCar;

    function getBudget() {
        return this.budget;
    }

    function buyCar(carInst){
        if (carInst.price > this.getBudget()) {
            throw new Error('the budget is too small to buy car ' + carInst.model + ' with price ' + carInst.price);
        }

        this.budget -= carInst.price;
        this.garage.addCar(carInst);
    }
}

/**
 * @param {Object} buyerInst
 */
function showRoom(buyerInst) {
    var car,
        i = 0;
    for (i; i < 10; i++) {
        car = new Car('model_' + (i+1),  'vendor', Math.floor(Math.random() * 100));
        try {
            buyerInst.buyCar(car)
        } catch (Error) {
            console.log(Error.message);
        }
    }
}

