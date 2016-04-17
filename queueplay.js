var queue = require('queue-async');
var q = queue();
var names = ['kai', 'theo', 'lynn'];

// Assemble a greeting
function makeGreeting(name, callback) {
    console.log('making greeting');
    var greeting = 'hello ' + name;
    callback(null, greeting);
}

// loop through the names, and assemble a greeting for each
for (i = 0; i < names.length; i++) {
    q.defer(makeGreeting, names[i]);
    console.log('defering ' + names[i]);
};

// once all greetings assembled, greet
q.awaitAll(function(err, greetings) {
    console.log(greetings);
    if (!greetings || err) {
        console.log('nope');
    }
    for (var i in greetings) {
        console.log(greetings[i]);
    }
});




// var foo = function(i) {
//   console.log(i);
//   return i;
// }
// var foo = function(i, callback) {
//   console.log(i);
//   callback(null, i);  // first argument is error reason, second is result
// }
// var finished = function(error, results) {
//   console.log(results);
// }

// queue(2)
//   .defer(foo, 1)
//   .defer(foo, 2)
//   .defer(foo, 3)
//   .defer(foo, 4)
//   .awaitAll(finished);  // only prints "1" and "2", since foo() doesn't execute callbacks
