import curry from 'lodash/curry'

const combineArgs = (...args) => args
const getArgs = length => curry(combineArgs, length)

export default getArgs