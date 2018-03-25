var numbers = [1,2,3];
var doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    doubleNumbers.push(numbers[i]*2);
}

// console.log(doubleNumbers);

const test = numbers.map(number => {
    // console.log(`this is from test ${number * 2}`);
});

const cars = [
    { model: 'Toyota', price: 'Decent' },
    { model: 'Tesla', price: 'Pricey' },
    { model: 'Toy', price: 'Cheap' }
];

const prices = [];

let carPrices = cars.map(car => {
    prices.push(car.price);
});

// console.log(prices);

const trips = [
    { distance: 50, time: 10 },
    { distance: 75, time: 10 },
    { distance: 100, time: 10 }
];

const speeds = [];

let tripTime = trips.map(trip => {
    speeds.push(trip.distance / trip.time);
});

// console.log(speeds);

const paints = [
    { color: 'pretty' },
    { color: 'decent' },
    { color: 'fugly' }
];

function pluck(array, property) {
    array.map(ar => {
        console.log(ar[property]);
    });
}

pluck(paints, 'color');