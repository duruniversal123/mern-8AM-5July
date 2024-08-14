const path=require('path');

const obj={dir:"./test",base:"test.js"};

const stringFormat = path.format(obj);

console.log("stringFormat: " + stringFormat);
