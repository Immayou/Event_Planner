import React from 'react';
import { forwardRef } from 'react';
import Select from 'react-select';
import s from './SelectField.module.css';

const SelectField = forwardRef(
  (
    { name, value, handleChange, required, options, className, defaultValue },
    ref
  ) => {
    const labelClass = className ? `${s.label} ${s[className]}` : `${s.label}`;
    const selectClass = className
      ? `${s.select} ${s[className]}`
      : `${s.select}`;

    return (
      <label className={labelClass}>
        <Select
          classNamePrefix="custom-select"
          className={selectClass}
          name={name}
          value={value}
          onChange={handleChange}
          defaultValue={defaultValue}
          required={required}
          options={options.map(option => ({ value: option, label: option }))}
          ref={ref}
        />
      </label>
    );
  }
);
export default SelectField;
