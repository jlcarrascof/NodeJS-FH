const fs = require('fs');

fs.readFile('README.md', 'utf8', (err, data) => {
    console.log(data);
});

console.log('This is the end of the program');
