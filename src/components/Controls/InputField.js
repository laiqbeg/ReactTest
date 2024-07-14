import React from 'react';

const InputField = ({ label, type, id, register, validation, errors, pattern }) => {
    const inputProps = {
        type: type || 'text',
        className: 'form-control',
        id: id,
        ...register(id, { ...validation, pattern: pattern })
    };

    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            {type === 'textarea' ? (
                <textarea {...inputProps} />
            ) : (
                <input {...inputProps} />
            )}
            {errors[id] && errors[id].type === 'pattern' && <span>Invalid {label.toLowerCase()} format</span>}
            {errors[id] && errors[id].type !== 'pattern' && <span>This field is required</span>}
        </div>
    );
};

export default InputField;
