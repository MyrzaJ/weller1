import React from 'react'
import './header.css'
import { FaViber,FaTelegramPlane , FaRegUser} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram, BsSearch,BsHandbag} from 'react-icons/bs'
import {RxDividerVertical} from 'react-icons/rx'
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'
import Burger from '../burger/Burger';


const Header = () => {

  return (
    

<header>
<div className="topHeader">
  <nav className='Navigations'>
    <li className='navTopHeader'>Мой аккаунт</li>
   <Link to="/two"> <li className='navTopHeader'>Контакты</li></Link>
    <li className='navTopHeader'>Корзина</li>
    <li className='navTopHeader'>Авторизоваться</li>
    <RxDividerVertical color={'white'} size={'20px'}/>
    </nav>
   
  
  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between' , maxWidth:'400px'}}>
  <div className="social" >
  <FaViber size={'30px'} color={'#7c519e'} style={{margin:'0 5px'}} /> 
  <div className='Viber'><p  className='vb' >Viber </p>
  <a href="" className='vbnumber'>+85264243278

</a> 
</div>

</div>

<RxDividerVertical color={'white'} size={'20px'}/>
<div style={{display:"flex", alignItems:'center', }}><p style={{color:'#bde1f5',fontWeight:'bold',fontSize:'12px' }}>РУССКИЙ</p> <IoIosArrowDown color={'#bde1f5'} size={'12px'}/></div>

<RxDividerVertical color={'white'} size={'20px'}/>
<div className='socialLinks'>
<FiFacebook color={'#bde1f5'}/>
<BsInstagram color={'#bde1f5'} style={{margin:'0 10px'}}/>
<FaTelegramPlane color={'#bde1f5'}/>
</div>
  </div>



  
</div>  
<div className="downHeader">
 <div style={{display:'flex' , alignItems:'center'}}>
  <div className='burg'>
  <Burger  />
  </div>
<a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="134" height="55" fill="none" viewBox="0 0 164 55" className='logo'>
  <path fill="#CA1113" d="M20.3 10.1h-8.9v30.1h8.9V10.1z"/>
  <path fill="#fff" fill-rule="evenodd" d="M38.5 10.1H47v13.6l7.4-13.6h9L47 40.1h-8.9V27.4l-7 12.7h-8.9v-30h8.9v13.6l7.4-13.6zM86.2 27.5H67c-2.8 8.1 7.7 5.8 9.2 2.3h8.9c-3 6.1-8.1 10.5-16.6 10.4-9.1-.1-12.4-6.7-10.2-15 1.5-5.6 4.9-10.5 10-13 2.9-1.5 6.4-2.1 9.5-1.9 7.4.4 10.3 4.9 9.6 11.7-.2 1.7-.6 3.6-1.2 5.5zm-18-5.3h10.5c3.3-7.8-8.1-6.5-10.5 0zM139.6 27.5h-19.2c-2.8 8.1 7.7 5.8 9.2 2.3h8.9c-3 6.1-8.1 10.5-16.6 10.4-9.1-.1-12.4-6.7-10.2-15 1.5-5.6 4.9-10.5 10-13 2.9-1.5 6.4-2.1 9.5-1.9 7.4.4 10.3 4.9 9.6 11.7-.1 1.7-.6 3.6-1.2 5.5zm-17.9-5.3h10.5c3.2-7.8-8.2-6.5-10.5 0z" clip-rule="evenodd"/>
  <path fill="#fff" d="M146.2 10.5h9.1l-.6 2.4c2.7-2.5 6.3-3 8.8-2.6l-2.2 8.1c-6-.8-9.4 4.7-10.6 9.1l-3.5 12.8h-9.1l8.1-29.8z"/>
  <path fill="#fff" fill-rule="evenodd" d="M95.8.3h9L94 40.1h-9.1L95.8.3zM107.2.3h9.1l-10.8 39.8h-9.1L107.2.3z" clip-rule="evenodd"/>
  <path fill="#F6B200" d="M9.6 10.1H.7v30.1h8.9V10.1z"/>
  <path fill="#fff" d="M161.2 31.9c-.8-.8-1.8-1.2-3-1.2s-2.2.5-3 1.2c-.8.8-1.2 1.8-1.2 3s.5 2.2 1.2 3c.8.8 1.8 1.2 3 1.2s2.2-.5 3-1.2c.8-.8 1.2-1.8 1.2-3 .1-1.1-.4-2.2-1.2-3zm-3-2.2c1.4 0 2.7.6 3.7 1.5.9.9 1.5 2.2 1.5 3.7 0 1.4-.6 2.7-1.5 3.7-.9.9-2.2 1.5-3.7 1.5-1.4 0-2.7-.6-3.7-1.5-.9-.9-1.5-2.2-1.5-3.7 0-1.4.6-2.7 1.5-3.7 1-.9 2.3-1.5 3.7-1.5z"/>
  <path fill="#fff" d="M157.3 33.1v1.4h.8c.3 0 .5 0 .6-.1.1 0 .2-.1.3-.2.1-.1.1-.3.1-.4 0-.2 0-.3-.1-.4-.1-.1-.2-.2-.3-.2h-1.4v-.1zm0 2.4v2.2H156V32h2.5c.5 0 .8.1 1.1.2.3.1.5.3.7.6.2.3.3.6.3 1 0 .7-.3 1.2-1 1.5l1 2.5h-1.5l-.9-2.2h-.9v-.1zM143.8 49.3l1.4-.3 2.6 5h-1.7l-2.3-4.7zm-3.4-5.6h1.4V54h-1.4V43.7zm.6 4.6h3.5c.3 0 .5-.1.7-.2.2-.1.4-.3.5-.6.1-.2.2-.5.2-.8 0-.3-.1-.6-.2-.8-.1-.2-.3-.4-.5-.6-.2-.1-.5-.2-.7-.2H141v-1.4h3.4c.6 0 1.1.1 1.6.4.4.2.8.6 1 1 .2.4.4 1 .4 1.6 0 .6-.1 1.1-.4 1.6-.3.4-.6.8-1 1-.4.2-1 .4-1.6.4H141v-1.4zm-8.5-4.6h5.9v1.4h-5.9v-1.4zm0 4.5h5.1v1.4h-5.1v-1.4zm0 4.4h5.9V54h-5.9v-1.4zm-.7-8.9h1.4V54h-1.4V43.7zm-8.7 0h7.2v1.4h-7.2v-1.4zm2.9.9h1.4V54H126v-9.4zm-12.1-.9h1.3l5 7.9-.2.2v-8.1h1.4V54h-1.3l-5-7.8.2-.2v8h-1.4V43.7zm-8 0h5.9v1.4h-5.9v-1.4zm0 4.5h5.1v1.4h-5.1v-1.4zm0 4.4h5.9V54h-5.9v-1.4zm-.7-8.9h1.4V54h-1.4V43.7zm-5.4 10.4c-.7 0-1.3-.2-1.9-.5-.5-.3-1-.8-1.3-1.3-.3-.6-.4-1.2-.4-2v-2.8c0-.8.1-1.4.4-2 .3-.6.7-1 1.3-1.3.5-.3 1.2-.5 1.9-.5.6 0 1.1.1 1.6.4.5.3.9.6 1.2 1.1.3.5.6 1 .7 1.6h-1.5c-.1-.3-.2-.6-.4-.9-.2-.3-.5-.4-.7-.6-.3-.1-.6-.2-.9-.2-.4 0-.8.1-1.1.3-.3.2-.6.5-.7.8-.2.4-.3.8-.3 1.3v2.8c0 .5.1.9.3 1.3.2.4.4.6.7.8.3.2.7.3 1.1.3.3 0 .6-.1.9-.2.3-.1.5-.3.7-.6.2-.2.4-.5.4-.9h1.5c-.1.6-.3 1.1-.7 1.6-.3.5-.7.8-1.2 1.1-.5.2-1 .4-1.6.4zM82.5 43.7h1.3l5 7.9-.2.2v-8.1H90V54h-1.3l-5-7.8.2-.2v8h-1.4V43.7zm-5.8 9c.4 0 .8-.1 1.1-.3.3-.2.6-.5.7-.8.2-.4.3-.8.3-1.2v-3c0-.5-.1-.9-.3-1.2-.2-.4-.4-.6-.7-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.3.2-.6.5-.7.8-.2.3-.3.8-.3 1.2v3c0 .5.1.9.3 1.2.2.3.4.6.7.8.3.2.7.3 1.1.3zm0 1.4c-.7 0-1.3-.2-1.9-.5-.5-.3-1-.8-1.3-1.3-.3-.6-.4-1.2-.4-2v-2.9c0-.8.1-1.4.4-2 .3-.6.7-1 1.3-1.3.5-.3 1.2-.5 1.9-.5s1.3.2 1.9.5c.5.3 1 .8 1.3 1.3.3.6.4 1.2.4 2v2.9c0 .8-.1 1.4-.4 2-.3.6-.7 1-1.3 1.3-.6.3-1.2.5-1.9.5zm-5.9-.1h-1.4V43.7h1.4V54zM60.7 43.7h7.2v1.4h-7.2v-1.4zm2.9.9H65V54h-1.4v-9.4zm-7.5 9.5c-.8 0-1.4-.1-1.9-.4-.5-.3-.9-.7-1.2-1.3-.3-.6-.4-1.3-.4-2.1v-6.5H54v6.6c0 .7.2 1.3.6 1.7.4.4.9.6 1.6.6.7 0 1.2-.2 1.6-.6.4-.4.6-1 .6-1.7v-6.6h1.4v6.5c0 .8-.1 1.5-.4 2.1-.3.6-.7 1-1.2 1.3-.7.2-1.4.4-2.1.4zM43.5 43.6h1.4v10.2h-1.4V43.6zm.9 9h2.8c.7 0 1.3-.1 1.6-.4.3-.3.5-.7.5-1.2 0-.3-.1-.6-.2-.9-.1-.2-.3-.4-.6-.6-.3-.1-.6-.2-1-.2h-3.1V48h3.1c.5 0 .9-.1 1.2-.4.3-.3.4-.6.4-1.1 0-.5-.2-.9-.5-1.2-.3-.3-.8-.4-1.4-.4h-2.9v-1.3h3.2c.7 0 1.2.1 1.7.3.4.2.8.5 1 1 .2.4.3.9.3 1.5 0 .4-.1.7-.2 1-.1.3-.3.6-.6.8-.3.2-.6.4-1 .4.4.1.8.2 1.1.4.3.2.5.5.7.9.2.3.2.7.2 1.1 0 .6-.1 1-.4 1.5-.2.4-.6.8-1 1-.5.2-1 .3-1.6.3h-3.3v-1.2zM41 54h-1.4V43.7H41V54zm-7.4-4.7L35 49l2.6 5h-1.7l-2.3-4.7zm-3.5-5.6h1.4V54h-1.4V43.7zm.7 4.6h3.5c.3 0 .5-.1.7-.2.2-.1.4-.3.5-.6.1-.2.2-.5.2-.8 0-.3-.1-.6-.2-.8-.1-.2-.3-.4-.5-.6-.2-.1-.5-.2-.7-.2h-3.5v-1.4h3.4c.6 0 1.1.1 1.6.4.4.2.8.6 1 1 .2.4.4 1 .4 1.6 0 .6-.1 1.1-.4 1.6-.3.4-.6.8-1 1-.4.2-1 .4-1.6.4h-3.4v-1.4zm-9.3-4.6h7.2v1.4h-7.2v-1.4zm2.9.9h1.4V54h-1.4v-9.4zm-7.3 9.5c-.5 0-1 0-1.4-.1-.4-.1-.9-.2-1.2-.4-.4-.2-.7-.4-1.1-.7l.9-1.1c.4.3.8.6 1.3.8.5.2 1 .3 1.5.3.7 0 1.3-.1 1.7-.4.4-.3.6-.7.6-1.2 0-.4-.1-.6-.3-.8-.2-.2-.4-.4-.7-.5-.3-.1-.7-.2-1.1-.3h-.1c-.7-.1-1.2-.2-1.7-.4-.4-.1-.8-.4-1.1-.8-.3-.4-.5-1-.5-1.7 0-.6.1-1.2.4-1.6.3-.4.7-.8 1.2-1 .5-.2 1.2-.4 2-.4.4 0 .7 0 1.1.1.4.1.7.2 1.1.4.3.2.7.4 1 .6l-.8 1.1c-.4-.3-.8-.5-1.2-.6-.4-.4-.8-.4-1.2-.4-.7 0-1.2.1-1.6.4-.4.3-.6.7-.6 1.2 0 .4.1.6.3.8.2.2.5.4.7.4.3.1.7.2 1.2.3h.4c.6.1 1.1.3 1.6.5.4.2.8.5 1 .8.3.4.4.9.4 1.6 0 .6-.1 1.2-.4 1.6-.3.4-.7.8-1.3 1-.6.4-1.3.5-2.1.5zm-5.6-.1H10V43.7h1.4V54h.1zM.7 43.6h1.4v10.3H.7V43.6zm1 9H4c.8 0 1.3-.2 1.8-.6.4-.4.6-.9.6-1.7v-3c0-.7-.2-1.3-.6-1.7-.4-.4-1-.6-1.8-.6H1.7v-1.4H4c.8 0 1.5.1 2.1.4.6.3 1 .7 1.3 1.3.3.6.5 1.2.5 2v2.9c0 .8-.2 1.4-.5 2-.3.5-.8 1-1.3 1.3-.6.3-1.3.4-2.1.4H1.7v-1.3z"/>
</svg></a>
 </div>

<div className='searchblock'>
<input type="text" placeholder='Поиск...' className='search'/>

<div className='selected'>
<p style={{padding:'15px 0' , fontFamily:'sans-serif', alignItems:'center'}}>Все категории <IoIosArrowDown color={'#000000'} size={'10px'}/></p>
</div>
<div className='seearchIcon'>
<BsSearch style={{margin:'11px'}}/>
</div>
</div>

   <div className='telega'>
   <FaTelegramPlane color={'#FFFFFF'} size={'35px'} style={{margin:'0 10px'}}/>
<div >
  <p className='vb'>НАПИШИТЕ НАМ СЕЙЧАС</p>
  <a href="" className='vbnumber'>+49 1512 7905185</a>
</div>
    </div>    

<div><FaRegUser size={'25px'} color={'#FFFFFF'}/>
<BsHandbag size={'25px'} color={'#FFFFFF'} style={{margin:'0 10px'}}/>
<IoIosArrowDown color={'#FFFFFF'} size={'20px'}/>
</div>

</div>

<div className='navi'>
<a className='navTopHeader' style={{color:'#000000'}}> ВЕЛЛЕР – ДИСТРИБЬЮТОРСКИЙ ЦЕНТР</a>
<a className='navTopHeader' style={{color:'#000000', margin:'0 10px'}}>МАГАЗИН</a>
<a href='/about' className='navTopHeader' style={{color:'#000000'}}>О НАС</a>
<a href='/contactus' className='navTopHeader' style={{color:'#000000', margin:'0 10px'}}>СВЯЗАТЬСЯ С НАМИ
</a>
</div>
<hr />
</header>

    
  )
}

export default Header