'use strict'

import React from 'react'
import Cookies from 'js-cookie'

const DjangoCSRFToken = () => (
    <input type="hidden" name="csrfmiddlewaretoken" value={Cookies.get('csrftoken')}/>
)

export default DjangoCSRFToken