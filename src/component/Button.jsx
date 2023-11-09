import React from 'react'
import "./Button.css"

const Button = ({ clickEvent }) => {
    return (
        <div className='btn-group'>
            <div className='btn-button'>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>7</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>4</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>1</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>.</button>
            </div>
            <div className='btn-button'>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>8</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>5</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>2</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>0</button>
            </div>
            <div className='btn-button'>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>9</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>6</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>3</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>00</button>
            </div>
            <div className='btn-button'>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>+</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>-</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>*</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>/</button>
            </div>
            <div className='btn-button'>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>C</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>Back</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>=</button>
                <button className='btn' onClick={(e) => clickEvent(e.target.innerText)}>%</button>
            </div>
        </div>
    )
}

export default Button
