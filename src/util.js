import Immutable from 'immutable';

/**
 *
 * @see https://gist.github.com/skevy/8a4ffc3cfdaf5fd68739
 */
export function createActionSet(actions, namespace = null) {
  const actionSet = Immutable.Map(actions)
    .map((func, key) => {
      const actionKey = 
        typeof namespace === 'string' ? `${namespace} - ${key}` : key;
      const method = (...args) => {
        const result = func(...args);
        // For redux-thunk.
        if (Object.prototype.toString.call(result) === '[object Function]') {
          return ((...innerArgs) => {
            return result(...innerArgs);
          });
        } else {
          return {
            type: actionKey,
            ...result
          };
        }
      }
      return method;
    })
    .toJS();

  return actionSet;
};