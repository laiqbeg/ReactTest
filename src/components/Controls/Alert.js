// src/components/common/CustomAlert.js

import React from 'react';
import { Alert } from 'react-bootstrap';

const CustomAlert = ({ variant = 'info', message, onClose }) => {
    return (
        <Alert variant={variant} onClose={onClose} dismissible>
            {message}
        </Alert>
    );
};

export default CustomAlert;
