const colors = ['red', 'blue', 'green', 'monster'];

for (let i = 0; i < colors.length; i++) {
    console.log('traditional for loop: ' + colors[i]);
}

colors.forEach(function(color) {
    console.log('forEach loop: ' + color);
});

colors.forEach(color => {
    console.log('arrow function: ' + color);
});