import React from 'react'

const Input = ({placeholder, name, handleChange, accepts, maxLength, type, required, value, right, del, width}) => {
  return (
    <div className='midscreen:pt-4 midscreen:pb-4 pt-4 pb-3'>
      <input 
        type={type} 
        placeholder={placeholder}
        required={required}
        value={value}
        del={del}
        right={right}
        accept={accepts}
        maxLength={maxLength}
        name={name}
        onChange={handleChange}
        className={`${del && 'minscreen:hidden'} ${right && 'minscreen:ml-5'} text-black font-serif border-gray-400 shadow-lg border-1 border rounded-md pl-2 pr-2 focus:outline-none h-[35px] placeholder:text-gray-600 ${width ? 'midscreen:w-[470px] w-[94vw] minscreen:w-[350px]' : 'minscreen:w-[350px] midscreen:w-[220px] w-[620px]'}`}
      />
    </div>
  )
}

export default Input