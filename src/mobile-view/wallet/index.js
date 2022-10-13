import React from 'react';
import './style.css';
import NavbarMobile from '../../components/navbar-mobile';
import Avatar from '../../media/logo/Avatar.png'

function Wallet() {
  return (
    <div className='wallet'>
        <div className='wallet__sec1'>
            <div className='wallet__sec1__left'>
                <div className='avatar__circle'>HM</div>
            </div>
            <div className='wallet__sec1__right'>
                <span className='txt1'>Wallet(INR)</span>
                <span className='txt2'>₹1,556.00</span>
            </div>
        </div>
        <div className='wallet__sec2'>
            <div className='heading'>
                Pay Friends
            </div>
            <div className='content'>
            <div className='add-btn wallet__sec2__child'>A</div>
            <img src={Avatar} alt="" className='wallet__sec2__child'></img>
            <img src={Avatar} alt="" className='wallet__sec2__child'></img>
            <img src={Avatar} alt="" className='wallet__sec2__child'></img>
            <img src={Avatar} alt="" className='wallet__sec2__child'></img>
            <img src={Avatar} alt="" className='wallet__sec2__child'></img>
            </div>
        </div>
        <div className='wallet__sec3'></div>
        <NavbarMobile />
    </div>
  )
}

export default Wallet