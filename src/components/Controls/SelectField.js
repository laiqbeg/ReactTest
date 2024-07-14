import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

const SelectField = ({ name, control, options, rules, placeholder, errors, isMulti }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <Select
                        {...field}
                        options={options}
                        classNamePrefix="react-select"
                        placeholder={placeholder}
                        isMulti={isMulti} // Pass isMulti prop to Select component
                    />
                )}
            />
            {errors[name] && <span>This field is required</span>}
        </div>
    );
};

export default SelectField;
