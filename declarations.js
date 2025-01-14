const escapeStr = '`\\/"\'';
const arr = Object.freeze([4, '2']);
const obj = Object.freeze({
  str: 'DAME',
  num: 2,
  bool: true,
  undef: undefined
});

const nested = Object.freeze({
  arr: Object.freeze([4, undefined, '2']),
  obj: Object.freeze({
    str: 'Nested String',
    num: 123,
    bool: false
  })
});
