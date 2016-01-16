var fs = require("fs");
var filePath = process.argv[2];
var numLines = undefined;

function readFile(path) {
    // this will take a while
    fs.readFile(path, function doneReading(err, fileBuff){
        // then do this
        var fileContents = fileBuff.toString();
        var fileArray = fileContents.split("\n");
        var numLines = fileArray.length - 1;
        console.log(numLines);
    });
};

readFile(logNum, filePath);

// official solution, very tidy!
// var fs = require('fs')  
// var file = process.argv[2]  

// fs.readFile(file, function (err, contents) {  
// // fs.readFile(file, 'utf8', callback) can also be used  
// var lines = contents.toString().split('\n').length - 1  
// console.log(lines)  
// }) 