'use strict'

import * as ErrorMessages from "./ErrorMessages"

export const required = value => {
    return (value) ?
        null:
        ErrorMessages.isRequired
}

export const maxFileSize = (maxSize, fieldName) => {
    return (file, state) => {
        const sizeMB = state[fieldName] / (1024*1024)
        return (sizeMB <= maxSize) ?
            null:
            ErrorMessages.maxFileSize(maxSize)
    }
}