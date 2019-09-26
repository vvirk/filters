import React from 'react';

// styles
import s from './styles/filterCheckbox.module.scss';

export const FilterCheckbox = ({ label, type, onChange, checked}) => (
    <label className={s.filter}>
    {label}
    <input 
      className={s.checkbox}
      type={type} 
      onChange={onChange} 
      checked={checked}
    />
  </label>
);

export default FilterCheckbox;