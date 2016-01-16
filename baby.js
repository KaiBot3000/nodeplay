function sumNums(numArray) {
    var sum = 0;
    // console.log(numArray);

    for (i=2; i < numArray.length; i++) {
        // console.log(numArray[i]);
        sum += Number(numArray[i]);
    }

    console.log(sum);
};

sumNums(process.argv);