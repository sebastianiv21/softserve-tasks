const envelopes = (env1, env2) => {
    if (typeof env1 !== 'object' || typeof env2 !== 'object')
    throw { status: 'failed', reason: 'Input parameters must be objects' };
  const result =
    env1.a > env2.c && env1.b > env2.d
      ? 'Envelope 1'
      : env1.a < env2.c && env1.b < env2.d
      ? 'Envelope 2'
      : 0;
  return result;
};

try {
    console.log(envelopes({ a: 3.6, b: 6 }, { c: 3.5, d: 5 }));
  } catch (e) {
    console.error(e);
  }

export default envelopes;
