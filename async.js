var fs = require("fs");
var filePath = process.argv[2];
var numLines = undefined;

function readFile(callback, path) {
    // this will take a while
    fs.readFile(path, function doneReading(err, fileBuff){
        // then do this
        // console.log("called");
        var fileContents = fileBuff.toString();
        var fileArray = fileContents.split("\n");
        var numLines = fileArray.length - 1;
        callback(numLines);
    });
};

function logNum(numLines) {
    console.log(numLines);
}

readFile(logNum, filePath);