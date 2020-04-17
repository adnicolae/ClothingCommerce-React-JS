import React from 'react'
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...domProps }) => {
  return (
    <div className="group">
      <input 
        className="form-input"
        onChange={ handleChange }
        { ...domProps }
      />
      {
        label ? 
        (<label 
          className={ `${ domProps.value.length ? 'shrink' : ''} form-input-label`}>
          { label }
        </label>) 
        : null
      }
    </div>
  )
}

export default FormInput;
