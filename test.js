const assert = require('assert')
const sinon = require('sinon')
const promisify = require('./index.js')
describe('promisify', () => {
  it('should return a promisified function', () =>{
    const f = (time, cb) => setTimeout(() => cb(null, 'success'), time)
    const pf = promisify(null, f)
    return pf(100)
      .then(res => assert.equal(res, 'success'))
  })

  it('should bind the promisified function to the first arg', () =>{

    const obj = {
      time: 100,
      f (cb) {
        if (!this.time) throw new Error('NO TIME')
        setTimeout(() => cb(null, 'success'), this.time)
      }
    }
    const pf = promisify(obj, obj.f)
    return pf()
      .then(res => assert.equal(res, 'success'))
  })

  it('should reject the returned promise if the callback returns an error', () =>{
    const f = (time, cb) => setTimeout(() => cb('Error'), time)
    const pf = promisify(null, f)
    return pf(100)
      .then(() => assert(false, 'the promise should be rejected'))
      .catch(err => assert.equal(err, 'Error'))
  })



})
