fs = require('fs');
const input = fs.readFileSync('input.txt').toString();
console.log(Number.parseInt(eval(input.replace(/\(/g, "+1").replace(/\)/g, "-1"))));