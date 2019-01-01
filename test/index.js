const test = require('ava');
const promisify = require('../index');

test('no arg function', async t => {
  const fn = cb => {
    cb(null, true);
  };
  const promiseFn = promisify(fn);
  t.is(true, await promiseFn());
  t.pass();
});

test('single arg function', async t => {
  const fn = (a, cb) => {
    if (a) {
      cb(null, a);
    } else {
      cb(new Error('err'));
    }
  };
  const promiseFn = promisify(fn);
  const _a = 'test';
  t.is(_a, await promiseFn(_a));
  t.pass();
});

test('multiple arg function', async t => {
  const fn = (a1, a2, cb) => {
    if (a1 && a2) {
      cb(null, a1, a2);
    } else {
      cb(new Error('bad arguments'));
    }
  };
  const promiseFn = promisify(fn);
  const r = await promiseFn('test1', 'test2');
  t.is('test1', r[0]);
  t.is('test2', r[1]);
  t.pass();
});

test('error should be thrown', async t => {
  const fn = (a1, a2, cb) => {
    if (a1 && a2) {
      cb(null, a1, a2);
    } else {
      cb(new Error('bad arguments'));
    }
  };
  const promiseFn = promisify(fn);
  try {
    await promiseFn(false, false);
    t.fail('Function should error');
  } catch (err) {
    t.pass();
  }
});
