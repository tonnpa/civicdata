'use strict'

export const isRequired = fieldName => `${fieldName} is required.`

export const maxFileSize = size => {
    return () => `File size must not exceed ${size} MB.`
}
