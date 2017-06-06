/**
 * Created by tonnpa on 6/5/17.
 */
"use strict";

import React from "react";
import FaDownload from "react-icons/lib/fa/download";

const DownloadButton = ({file_name}) => (
    <a href={`/static/data/${file_name}`}
       download={file_name}
       className="btn-sm btn-warning"
       role="button">Download <FaDownload/></a>
);

export default DownloadButton;