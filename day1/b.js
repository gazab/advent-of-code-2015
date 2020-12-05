fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trimEnd();
let floor = 0;
[...input].forEach((c,i) => {
    floor += c == "(" ? 1 : -1;
    if(floor == -1) return console.log(i+1);
})