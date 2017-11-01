'use strict'

import React from 'react'

const FormErrorDisplay = (props) => (
    (props.display === true) ? <div className="validation-error">{props.children}</div> : null
)

export default FormErrorDisplay