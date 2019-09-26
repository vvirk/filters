import React from 'react';

// styles
import s from './styles/filterInput.module.scss';

export const FilterInput = ({ type, placeholder, onChange, value}) => (
  <input
    className={s.filter}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);

export default FilterInput;