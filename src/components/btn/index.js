import React from 'react';
import './btn_style.css';

const Btn = {
    HotPink: function HotPink(props){
        return(
            <div className='btn-hotpink'>
                {props.label}
            </div>
        )
    }
}

export default Btn