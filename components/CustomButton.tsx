'use client'
import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonProps) => {
  return (
    <div>
      <button disabled={false} type={btnType || 'button'} className={`custom-btn ${containerStyles}`} onClick={() => { handleClick }}>
        {title}
      </button>
    </div>
  )
}

export default CustomButton         
