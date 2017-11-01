'use strict'

import * as ErrorMessages from "./ErrorMessages"

export const required = (value) => {
    if (value) {
        return null
    } else {
        return ErrorMessages.isRequired
    }
}