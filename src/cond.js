import isArray from 'lodash/isArray'
import isFunction from 'lodash/isFunction'

const checkConditionIsValid =
  condition => isArray(condition) && condition.length > 0

const cond = (...conditions) => {
  const conditionMap = new Map()
  let defaultValue;

  conditions
  .filter(checkConditionIsValid)
  .forEach((condition) => {
    if (condition.length === 1) {
      defaultValue = condition[0]
    } else {
      conditionMap.set(...condition)
    }
  })

  return expression => {
    const statement = conditionMap.get(expression)

    return isFunction(statement)
      ? statement()
      : statement || (
        isFunction(defaultValue)
          ? defaultValue()
          : defaultValue
      )
  }
}

export default cond
