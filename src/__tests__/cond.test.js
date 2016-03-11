import { expect } from 'chai'
import { spy } from 'sinon'
import { default as cond } from '../cond'

describe('cond', () => {
  it('returns a non-function statement', () => {
    const strResult = cond(['apple', 'isFruit'])('apple')
    expect(strResult).to.equal('isFruit')

    const IS_FRUIT = Symbol()
    const symbolResult = cond(['apple', IS_FRUIT])('apple')
    expect(symbolResult).to.equal(IS_FRUIT)
  })

  it('executes a function statement and returns its result', () => {
    const statementSpy = spy(() => 'isFruit')
    const result = cond(['apple', statementSpy])('apple')
    expect(statementSpy.callCount).to.equal(1)
    expect(result).to.equal('isFruit')
  })

  it('call the function with supplied arguments', () => {
    const statementSpy = spy()
    const args = [{}, {}]
    cond(['apple', statementSpy])('apple', ...args)
    expect(statementSpy.getCall(0).calledWithExactly(...args)).to.be.true
  })

  it('returns the default if no claused matched', () => {
    const result = cond(['isVegetable'])('apple')
    expect(result).to.equal('isVegetable')
  })

  it('switch to the matched condition', () => {
    const conditions = cond(
      ['apple', 'isFruit'],
      ['orange', 'isFruit'],
      ['eggplant', 'isVegetable'],
      ['isMeat'],
    )

    expect(conditions('apple')).to.equal('isFruit')
    expect(conditions('orange')).to.equal('isFruit')
    expect(conditions('eggplant')).to.equal('isVegetable')
    expect(conditions('beef')).to.equal('isMeat')
  })
})
