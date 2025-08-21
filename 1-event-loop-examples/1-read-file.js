const {readFile} = require('fs');

console.log('Started a first task');
//CHECK FILE PATH
readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('Complicated First task');
})
console.log('Started Next task');