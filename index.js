/**
 * Takes a function and returns a new function that will pass any arguments
 * and return a promise with the results
 **/
function promisify(fn) {
  return (...args) => {
    return new Promise((rs, rj) => {
      fn(...args, (err, ..._args) => {
        if (err) return rj(err);
        rs(..._args);
      });
    });
  };
}

module.exports = { promisify };