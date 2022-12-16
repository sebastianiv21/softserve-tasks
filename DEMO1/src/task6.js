const numericSequence = (len, min) => {
    const arr = [];
    for (let i = 0; arr.length < len; i++) {
        if (i*i >= min) arr.push(i);
    }

    return arr.join()
};

console.log(numericSequence(5,4));

export default numericSequence;
