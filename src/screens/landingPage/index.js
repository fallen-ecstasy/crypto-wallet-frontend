import React from 'react';
import './landingPage.css'
import logo from '../../media/logo.png';
import cover from '../../media/img1.png';
import Btn from '../../components/btn';
import Box from '../../components/box';

function landingPage() {
  return (
    <div class="lp">
      {/* NAV */}
      <div class="lp__nav">
        {/* LOGO ON NAV */}
        <div class="nav__logo">
          <img src={logo} class ="nav__logo-img" />
          <span class="nav__logo-text"><span1>Draph</span1><span2>Line</span2></span>
        </div>
        {/* RIGHT SECTION */}
        <div className='nav__right'>
          <span className='nav__right__btn'>Product</span>
          <span className='nav__right__btn'>Company</span>
          <span className='nav__right__btn'>FAQ</span>
          <Btn.HotPink label="Login" />
        </div>
      </div>
      {/* END NAV */}

      {/* LP1 Start */}
      <div className='lp1 snap-container'>
        <div className='lp1__left'>
          <span className='lp1__left__txt1'>
          Make your Crypto Transactions Secure
          </span>
          <span className='lp1__left__txt2'>
          Buy and sell 100+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit or debit card.
          </span>
          <br></br>
          <Btn.HotPink label="Get Started !" />
        </div>
        <div className='lp1__right'>
          <img className='lp1__right__img' src={cover} />
        </div>
      </div>

      <div className='lp2 snap-container'>
        <div className='lp2__head'>
          <span className='lp2__head__txt1'>
          Top Crpyto now
          </span>
          <span className='lp2__head__txt2'>
          Choose from Top 30+ crypto and Stablecoins.
          </span>
        </div>
        <div className='lp2__list'>
          <Box.NeonBox></Box.NeonBox>
          <Box.NeonBox></Box.NeonBox>
          <Box.NeonBox></Box.NeonBox>
        </div>
      </div>

    </div>
  )
}

export default landingPage;