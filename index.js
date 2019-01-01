/**
 * Takes a function and returns a new function that will pass any arguments
 * and return a promise with the results
 **/
module.exports = function promisify(fn) {
  return (...args) => {
    return new Promise((rs, rj) => {
      fn(...args, (err, ..._args) => {
        if (err) return rj(err);
        if (_args.length === 0) return rs();
        if (_args.length === 1) return rs(_args[0]);
        rs([..._args]);
      });
    });
  };
}
