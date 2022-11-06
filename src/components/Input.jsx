import React from 'react'

const Input = ({placeholder, name, handleChange, accepts, maxLength, type, required, value, width}) => {
  return (
    <div className='midscreen:pt-4 midscreen:pb-4 pt-4 pb-3'>
      <input 
        type={type} 
        placeholder={placeholder}
        required={required}
        value={value}
        accept={accepts}
        maxLength={maxLength}
        name={name}
        onChange={handleChange}
        className={`text-black font-serif border-gray-400 shadow-lg border-1 border rounded-md pl-2 pr-2 focus:outline-none h-[35px] placeholder:text-gray-600 ${width ? 'midscreen:w-[450px] w-[94vw]' : 'midscreen:w-[220px] w-[620px]'}`}
      />
    </div>
  )
}

export default Input