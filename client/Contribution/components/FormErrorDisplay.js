'use strict'

import React from 'react'

const FormErrorDisplay = (props) => (
    (props.display === true) ? <div>{props.children}</div> : null
)

export default FormErrorDisplay