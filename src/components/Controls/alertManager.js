// src/utils/alertManager.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import CustomAlert from '../Controls/Alert';

const showAlert = (message, variant = 'info') => {
    const alertContainer = document.createElement('div');
    alertContainer.style.position = 'fixed';
    alertContainer.style.top = '20px';
    alertContainer.style.right = '20px';
    alertContainer.style.zIndex = '9999';
    document.body.appendChild(alertContainer);

    const handleClose = () => {
        const root = createRoot(alertContainer);
        root.unmount();
        document.body.removeChild(alertContainer);
    };

    const root = createRoot(alertContainer);
    root.render(<CustomAlert variant={variant} message={message} onClose={handleClose} />);
};

export default showAlert;
