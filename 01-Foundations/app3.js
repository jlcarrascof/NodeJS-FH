const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const wordCount = content.split(' ').length;
// onst reactWordCount = words.filter(word => word.toLowerCase() === 'react').length;

console.log('Words: ', wordCount);
console.log('React count: ', (content.match(/react/ig) || []).length);
