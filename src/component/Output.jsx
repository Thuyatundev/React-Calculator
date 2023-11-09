import React from 'react'
import "./Output.css"

const Output = ({ output }) => {
    return (
        <div className='output-box'>
            <span className='output'>{output}</span>
        </div>
    )
}

export default Output
