// import module
var fs =  require("fs");
// get filepath
var file = process.argv[2];
// get buffer object from file
var fileBuff = fs.readFileSync(file);
// convert buffer to string
var fileContents = fileBuff.toString();
// split along newlines to count them
var fileArray = fileContents.split("\n");

var newlines = fileArray.length - 1;

console.log(newlines);
