const colors = ['red', 'blue', 'green', 'monster'];

for (let i = 0; i < colors.length; i++) {
    // console.log('traditional for loop: ' + colors[i]);
}

colors.forEach(function(color) {
    // console.log('forEach loop: ' + color);
});

colors.forEach(color => {
    // console.log('arrow function: ' + color);
});


const numbers = [1, 2, 3, 4, 5];

let sum = 0;

// function adder(number) {
//     console.log(sum += number);
// }

// numbers.forEach(adder);

numbers.forEach(number => {
    // console.log(sum += number);
});


function handlePosts() {
    var posts = [
        { id: 23, title: 'Why'},
        { id: 33, title: 'How'},
        { id: 43, title: 'When'}
    ];

    for (let i = 0; i < posts.length; i++) {
        // console.log(posts[i]);
    }
}

handlePosts();

const testPosts = () => {
    const posts = [
        { id: 23, title: 'Why'},
        { id: 33, title: 'How'},
        { id: 43, title: 'When'}
    ];

    posts.forEach(post => {
        // console.log(`id: ${post.id} title: ${post.title}`);
    });
}

testPosts();

const images = [
    { height: 10, width: 30 },
    { height: 20, width: 30 },
    { height: 30, width: 30 }
];

const areas = [];

images.forEach(image => {
    areas.push(image.height * image.width);
});

// console.log(areas);