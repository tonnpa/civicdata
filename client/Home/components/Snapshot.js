'use strict'

import React from 'react'
import {Image, Modal, Well} from 'react-bootstrap'
import {TabTitles} from '../../constants'

const Snapshot = ({image_file_name, title, caption, tab, isOpen, onToggle}) => (
    <div>
        <Image src={`/static/media/data-visualizations/${image_file_name}`}
               className="center-block"
               alt={`Dataset Snapshot of ${title}`}
               onClick={onToggle}
               style={{display: (tab === TabTitles.PREVIEW) ? "none" : "inline"}}
               thumbnail responsive/>

        <Modal show={isOpen} onHide={onToggle}>
            <Modal.Header closeButton>
                <Modal.Title componentClass="h2">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Well>
                    {caption}
                </Well>
                <Image src={`/static/media/data-visualizations/${image_file_name}`}
                       className="center-block" thumbnail responsive/>
            </Modal.Body>
        </Modal>
    </div>
)

export default Snapshot