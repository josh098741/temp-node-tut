//CommonJS, everyfile is module (by default);
//Modules - Encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
console.log(data.singlePerson);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

require('./7-mine-granade');