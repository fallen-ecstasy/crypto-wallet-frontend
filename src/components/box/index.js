import React from 'react'
import './box_style.css'

const Box = { 
    NeonBox:function NeonBox(props) {
        return (
            <div className='box__neon'>
                {props.children}
            </div>
        )
    }
}

export default Box