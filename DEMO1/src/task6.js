const numericSequence = (len, min) => {
  if (!len || !min)
    return { status: 'failed', reason: 'Insert all the parameters' };
  if (typeof len !== 'number' || typeof min !== 'number' || len < 0 || min < 0)
    return {
      status: 'failed',
      reason: 'Input fields must be numbers greater than zero',
    };

  const arr = [];
  for (let i = 0; arr.length < len; i++) {
    if (i * i >= min) arr.push(i);
  }

  return arr.join();
};

module.exports = numericSequence;
