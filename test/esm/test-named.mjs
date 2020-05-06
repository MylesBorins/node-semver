import {clean, coerce, gt, lt, satisfies, valid} from '../../esm-wrapper.mjs'
import t from 'tap'

t.test('esm: test named exports', t => {
  t.ok(valid('1.2.3'));
  t.notOk(valid('a.b.c'))
  t.equals(clean('  =v1.2.3   '), '1.2.3')
  t.ok(satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3'))
  t.notOk(gt('1.2.3', '9.8.7'))
  t.ok(lt('1.2.3', '9.8.7'))
  t.equals(valid(coerce('v2')), '2.0.0')
  t.equals(valid(coerce('42.6.7.9.3-alpha')), '42.6.7')
  t.end()
});
