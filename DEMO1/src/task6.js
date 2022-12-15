// Output a comma-separated series of length n consisting of natural numbers whose square is more than the given minimum square.

// Input parameters: length and value of the minimum square

// Output: a string with a series of numbers // len=5, min=4 --> 3,4,5

const numericSequence = (len, min) => {
    const arr = [];
    for (let i = 0; arr.length < len; i++) {
        if (i*i > min) arr.push(i);
    }

    return arr.join()
};

console.log(numericSequence(5,4));

export default numericSequence;
