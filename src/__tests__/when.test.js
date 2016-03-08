import { expect } from 'chai'
import { default as when } from '../when'

describe('when', () => {
  it('returns an array with first two arguments', () => {
    expect(when(1, 2)).to.eql([1, 2])
    expect(when(1)(2)).to.eql([1, 2])
    expect(when(1, 2)).to.eql([1, 2])
  })
})