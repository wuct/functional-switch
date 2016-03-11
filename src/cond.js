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

  return (expression, ...otherArgs) => {
    const statement = conditionMap.get(expression)

    return isFunction(statement)
      ? statement(...otherArgs)
      : statement || (
        isFunction(defaultValue)
          ? defaultValue(...otherArgs)
          : defaultValue
      )
  }
}

export default cond
