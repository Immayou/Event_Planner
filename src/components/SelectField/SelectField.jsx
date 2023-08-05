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
      defaultValue,
    },
    ref
  ) => {
    const labelClass = className ? `${s.label} ${s[className]}` : `${s.label}`;
    const selectClass = className
      ? `${s.select} ${s[className]}`
      : `${s.select}`;
    console.log(ref);
    return (
      <label className={labelClass}>
        <span className={s.label_span}>{label}</span>
        <Select
          // menuIsOpen={true}
          // onFocus={true}
          // defaultInputValue="Search Text"
          onMenuOpen={() => handleSelectOpenClick(label)}
          onMenuClose={() => handleSelectCloseClick(label)}
          openMenuOnClick={true}
          classNamePrefix="custom-select"
          className={selectClass}
          name={name}
          value={value}
          onChange={handleChange}
          // defaultValue={defaultValue}
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
