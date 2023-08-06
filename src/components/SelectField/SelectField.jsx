import React from 'react';
import { forwardRef } from 'react';
import Select from 'react-select';
import s from './SelectField.module.css';

const SelectField = forwardRef(
  (
    {
      name,
      value,
      handleChange,
      required,
      label,
      options,
      className,
      isMenuOpen,
      handleSelectOpenClick,
      handleSelectCloseClick,
    },
    ref
  ) => {
    const labelClass = className ? `${s.label} ${s[className]}` : `${s.label}`;
    const selectClass = className
      ? `${s.select} ${s[className]}`
      : `${s.select}`;
    const spanClass = !isMenuOpen ? `${s.label_span}` : `${s.span}`;
    return (
      <label className={labelClass}>
        <span className={spanClass}>{label}</span>
        <Select
          onMenuOpen={() => handleSelectOpenClick(label)}
          onMenuClose={() => handleSelectCloseClick(label)}
          openMenuOnClick={true}
          classNamePrefix="custom-select"
          className={selectClass}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={isMenuOpen ? `${'Select'} ${label}` : 'Select'}
          required={required}
          options={options.map(option => ({ value: option, label: option }))}
          ref={ref}
        />
      </label>
    );
  }
);
export default SelectField;
