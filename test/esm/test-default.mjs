import {createRequire} from 'module'
import semver from '../../esm-wrapper.mjs'
import t from 'tap'

const require = createRequire(import.meta.url)

const {SEMVER_SPEC_VERSION} = require('../../internal/constants')

t.match(Object.getOwnPropertyDescriptor(semver, 'SEMVER_SPEC_VERSION'), {
  get: undefined,
  set: undefined,
  value: SEMVER_SPEC_VERSION,
  configurable: true,
  enumerable: true
}, 'just a normal value property')
