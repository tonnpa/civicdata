'use strict'

/**
 * Constructs a runner function that takes the updated state and
 * runs the specified validations against said state.
 */
export const ruleRunner = (field, name, ...validations) => {
    return (state) => {
        for (let validation of validations) {
            let errorMessageFunc = validation(state[field], state)
            if (errorMessageFunc) {
                return {[field]: errorMessageFunc(name)}
            }
        }
        return null
    }
}

/**
 * Calls all the validation rule runners and
 * aggregates their results into a single object.
 */
export const run = (state, runners) => {
    return runners.reduce((messages, runner) => {
        return Object.assign(messages, runner(state))
    }, {})
}
