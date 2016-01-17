// Create a program that prints a list of files in a given directory,  
// filtered by the extension of the files. You will be provided a directory  
// name as the first argument to your program (e.g. '/path/to/dir/') and a  
// file extension to filter by as the second argument.  

// For example, if you get 'txt' as the second argument then you will need to  
// filter the list to only files that end with .txt. Note that the second  
// argument will not come prefixed with a '.'.  

// The list of files should be printed to the console, one file per line. You  
// must use asynchronous I/O.

var fs = require("fs");
var path = require("path");
var directory = process.argv[2];
var filter = process.argv[3];

// console.log(directory, filter);

// get list of files
// for each file
//  if it ends w/ filter
//      print it

function filterFiles(err, fileArray) {
    for (i=0; i<fileArray.length; i++) {
        var filename = fileArray[i];
        console.log(filename);
    }
}

fs.readdir(directory, filterFiles);