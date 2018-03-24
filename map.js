var numbers = [1,2,3];
var doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    doubleNumbers.push(numbers[i]*2);
}

console.log(doubleNumbers);

const test = numbers.map(number => {
    console.log(`this is from test ${number * 2}`);
});

