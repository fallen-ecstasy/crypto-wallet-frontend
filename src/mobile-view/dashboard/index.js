import React from 'react';
import NavbarMobile from '../../components/navbar-mobile';
import '../dashboard/style.css';
import EthereumLogo from '../../media/logo/Ethereum-logo 1.png';


function PortfolioBox(props){
    return(
                <div className='Portfolio__content__box'>
                    <img className='box__content' src={EthereumLogo} alt="" />
                    <div className='block2'>
                        <div className='block2__left'>
                            <span className='nameTag'>Ethereum</span>
                            <span className='valueTag'>0.00000000145 ETH</span>
                        </div>
                        <div className='block2__right'>ETH</div>
                    </div>
                </div>
    )
}

function UpperHalf() {
    return (
        <div className='UpperHalf'>
            <div className='Sec1'>
                <div className='Greet'>
                    <span className='dp'>HM</span>
                    <span className='name'>Hello, Harsh</span>
                </div>
                <div className='QR-btn'>
                    Q
                </div>
            </div>
            <div className='Sec2'>
                <span className='text1'>Wallet (INR)</span>
                <span className='text2'>₹1,556.00</span>
            </div>
            <div className='Sec3'>
                <div className='btn-upper'>
                    <span className='btn'>A</span>
                    <span className='tag'>Add</span>
                </div>
                <div className='btn-upper'>
                    <span className='btn'>A</span>
                    <span className='tag'>Add</span>
                </div>
                <div className='btn-upper'>
                    <span className='btn'>A</span>
                    <span className='tag'>Add</span>
                </div>
                <div className='btn-upper'>
                    <span className='btn'>A</span>
                    <span className='tag'>Add</span>
                </div>
            </div>
        </div>
    )
}

function dashboard() {
  return (
    <div className = "Dashboard">
        <UpperHalf />
        
        <div className='Portfolio'>
            <div className='Portfolio__heading'>
                <span className='title'>Portfolio</span>
                <span className='network'>
                    <span className='title__indicator'></span>
                    Ethereum Mainnet
                </span>
            </div>
            <div className='Portfolio__content'>
        <PortfolioBox />
        <PortfolioBox />
        <PortfolioBox />
        <PortfolioBox />
        </div>
        </div>
        
        <NavbarMobile />
    </div>
  )
}

export default dashboard