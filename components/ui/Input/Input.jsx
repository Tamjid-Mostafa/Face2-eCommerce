
import React, { InputHTMLAttributes } from 'react'



const Input = (props) => {
  const { className, children, onChange, ...rest } = props



  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (
    <label>
      <input
        className={`bg-primary py-2 px-6 w-full appearance-none transition duration-150 ease-in-out pr-10 border border-accent-3 text-accent-6 ${className}`}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  )
}

export default Input
