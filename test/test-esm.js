const {resolve} = require('path');
const {gt} = require('../');
const tap = require('tap');

if (gt(process.version, '14.0.0')) {
  tap.test('test esm', async t => {
    const defaultTest = resolve(__dirname, './esm/test-default.mjs');
    const namedExportsTest = resolve(__dirname, './esm/test-named.mjs');
    await t.spawn(process.execPath, defaultTest);
    await t.spawn(process.execPath, namedExportsTest)
    t.ok(true)
    t.end();
  });
} else {
  tap.ok(true, 'Skip ESM Test on unsupported Node.js');
  tap.end();
}
