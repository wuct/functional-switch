import { expect } from 'chai'
import { default as otherwise } from '../otherwise'

describe('otherwise', () => {
  it('returns an array with first argument', () => {
    expect(otherwise(1)).to.eql([1])
  })
})