'use strict'

import React from 'react'
import {Image, Modal} from 'react-bootstrap'
import {TabTitles} from '../constants'

const Snapshot = ({image_file_name, tab, isOpen, onToggle}) => (
    <div>
        <Image src={`/static/media/${image_file_name}`}
               className="center-block"
               onClick={onToggle}
               style={{display: (tab === TabTitles.PREVIEW) ? "none" : "inline"}}
               thumbnail responsive/>

        <Modal show={isOpen} onHide={onToggle}>
            <Modal.Header closeButton>
                <Modal.Title>Some Title for the Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={`/static/media/${image_file_name}`}
                       className="center-block" thumbnail responsive/>
                <div>
                    This is some image caption text.
                </div>
            </Modal.Body>
        </Modal>
    </div>
)

export default Snapshot