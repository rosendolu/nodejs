const assert = require('assert');
const { isTrue } = require('./index');

assert(isTrue(1), '1 is not truthy');
assert(isTrue(0), '0 is not truthy');
assert.ok(isTrue(false), 'false is not truthy');
