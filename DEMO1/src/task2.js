const envelopes = (env1, env2) => {
  if (!env1 || !env2)
  throw { status: 'failed', reason: 'Insert all the parameters' };
  if (typeof env1 !== 'object' || typeof env2 !== 'object' || Array.isArray(env1) || Array.isArray(env2))
  throw { status: 'failed', reason: 'Input parameters must be objects' };
  if (!env1.hasOwnProperty('a') || !env1.hasOwnProperty('b'))
  throw { status: 'failed', reason: 'Envelope 1 must have a & b props' };
  if (!env2.hasOwnProperty('c') || !env2.hasOwnProperty('d'))
  throw { status: 'failed', reason: 'Envelope 2 must have c & d props' };
  if (env1.a < 0 || env1.b < 0 || env2.c < 0 || env2.d < 0)
  throw { status: 'failed', reason: 'Envelope\'s dimensions must be greater than zero' };
  
  const result =
    env1.a > env2.c && env1.b > env2.d
      ? 'Envelope 1'
      : env1.a < env2.c && env1.b < env2.d
      ? 'Envelope 2'
      : 0;
  return result;
};

module.exports = envelopes;
