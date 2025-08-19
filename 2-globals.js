//GLOBALS - NO WINDOW

//_dirname - path to current directory
//_filename - file name
//require - function to use module (CommonJS)
//module - info about current module (file)
//process - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

setInterval(() => {
    console.log("Hello");
},1000);