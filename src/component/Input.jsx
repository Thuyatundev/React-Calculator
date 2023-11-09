import React from 'react'
import "./Input.css"

const Input = ({ input }) => {
    return (
        <div className='input-box'>
            <span className='input'>{input}</span>
        </div>
    )
}

export default Input
