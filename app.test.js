const test = require('node:test');
const assert = require('node:assert');
const { getGreeting } = require('./app.js');

test('getGreeting возвращает корректную строку', () => {
    assert.strictEqual(getGreeting(), "Hello, world! ");
});