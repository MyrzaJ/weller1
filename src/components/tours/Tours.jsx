import React from 'react'
import { useEffect } from 'react';
import {BiTimeFive} from 'react-icons/bi'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Aos  from 'aos';
import './tour.css'
const Tours = () => {

  useEffect(() => { 
    Aos.init({duration: 500}); 
  }, []);
  return (
    <>
<div className='tourspage' >
<div className='logo'>
       <img src="https://i.ibb.co/bFN41V0/image-2.png" alt="logo" />
     </div>
     <h1 className='bigone'>Find tours for adventure</h1>
</div>
<div className="tourspageto" data-aos='fade-left' >
<h1 className='themes2'>OUR TOURS</h1>
<div>
<div className='cart' >
  <img className='photo'src="https://www.journalofnomads.com/wp-content/uploads/2019/09/Kel-Suu-Kyrgyzstan-boat-1-1024x768.jpg" alt="" />
<div className='more'>
    <Stack spacing={1}>
    <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
    </Stack>
<h3>Lorem ipsum</h3>
<p>Lorem ipsum dolor, sit amet consectetur</p>
<h3 className='price'> <BiTimeFive size={24}/> 8:00-18:00 <h3>100$</h3></h3>
</div>
</div>
<div className='cart' >
  <img className='photo'src="https://www.journalofnomads.com/wp-content/uploads/2019/09/Kel-Suu-Kyrgyzstan-boat-1-1024x768.jpg" alt="" />
<div className='more'>
    <Stack spacing={1}>
    <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
    </Stack>
<h3>Lorem ipsum</h3>
<p>Lorem ipsum dolor, sit amet consectetur</p>
<h3 className='price'> <BiTimeFive size={24}/> 8:00-18:00 <h3>100$</h3></h3>
</div>
</div>
<div className='cart' >
  <img className='photo'src="https://www.journalofnomads.com/wp-content/uploads/2019/09/Kel-Suu-Kyrgyzstan-boat-1-1024x768.jpg" alt="" />
<div className='more'>
    <Stack spacing={1}>
    <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
    </Stack>
<h3>Lorem ipsum</h3>
<p>Lorem ipsum dolor, sit amet consectetur</p>
<h3 className='price'> <BiTimeFive size={24}/> 8:00-18:00 <h3>100$</h3></h3>
</div>
</div>
<div className='cart' >
  <img className='photo'src="https://www.journalofnomads.com/wp-content/uploads/2019/09/Kel-Suu-Kyrgyzstan-boat-1-1024x768.jpg" alt="" />
<div className='more'>
    <Stack spacing={1}>
    <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
    </Stack>
<h3>Lorem ipsum</h3>
<p>Lorem ipsum dolor, sit amet consectetur</p>
<h3 className='price'> <BiTimeFive size={24}/> 8:00-18:00 <h3>100$</h3></h3>
</div>
</div>
<div className='cart' >
  <img className='photo'src="https://www.journalofnomads.com/wp-content/uploads/2019/09/Kel-Suu-Kyrgyzstan-boat-1-1024x768.jpg" alt="" />
<div className='more'>
    <Stack spacing={1}>
    <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
    </Stack>
<h3>Lorem ipsum</h3>
<p>Lorem ipsum dolor, sit amet consectetur</p>
<h3 className='price'> <BiTimeFive size={24}/> 8:00-18:00 <h3>100$</h3></h3>
</div>
</div>
<div className='cart' >
  <img className='photo'src="https://www.journalofnomads.com/wp-content/uploads/2019/09/Kel-Suu-Kyrgyzstan-boat-1-1024x768.jpg" alt="" />
<div className='more'>
    <Stack spacing={1}>
    <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
    </Stack>
<h3>Lorem ipsum</h3>
<p>Lorem ipsum dolor, sit amet consectetur</p>
<h3 className='price'> <BiTimeFive size={24}/> 8:00-18:00 <h3>100$</h3></h3>
</div>
</div>
<div className='cart' >
  <img className='photo'src="https://www.journalofnomads.com/wp-content/uploads/2019/09/Kel-Suu-Kyrgyzstan-boat-1-1024x768.jpg" alt="" />
<div className='more'>
    <Stack spacing={1}>
    <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
    </Stack>
<h3>Lorem ipsum</h3>
<p>Lorem ipsum dolor, sit amet consectetur</p>
<h3 className='price'> <BiTimeFive size={24}/> 8:00-18:00 <h3>100$</h3></h3>
</div>
</div>
<div className='cart' >
  <img className='photo'src="https://www.journalofnomads.com/wp-content/uploads/2019/09/Kel-Suu-Kyrgyzstan-boat-1-1024x768.jpg" alt="" />
<div className='more'>
    <Stack spacing={1}>
    <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
    </Stack>
<h3>Lorem ipsum</h3>
<p>Lorem ipsum dolor, sit amet consectetur</p>
<h3 className='price'> <BiTimeFive size={24}/> 8:00-18:00 <h3>100$</h3></h3>
</div>
</div>
<div className='cart' >
  <img className='photo'src="https://www.journalofnomads.com/wp-content/uploads/2019/09/Kel-Suu-Kyrgyzstan-boat-1-1024x768.jpg" alt="" />
<div className='more'>
    <Stack spacing={1}>
    <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
    </Stack>
<h3>Lorem ipsum</h3>
<p>Lorem ipsum dolor, sit amet consectetur</p>
<h3 className='price'> <BiTimeFive size={24}/> 8:00-18:00 <h3>100$</h3></h3>
</div>
</div>
<div className='cart' >
  <img className='photo'src="https://www.journalofnomads.com/wp-content/uploads/2019/09/Kel-Suu-Kyrgyzstan-boat-1-1024x768.jpg" alt="" />
<div className='more'>
    <Stack spacing={1}>
    <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
    </Stack>
<h3>Lorem ipsum</h3>
<p>Lorem ipsum dolor, sit amet consectetur</p>
<h3 className='price'> <BiTimeFive size={24}/> 8:00-18:00 <h3>100$</h3></h3>
</div>
</div>

<div className='cart' >
  <img className='photo'src="https://www.journalofnomads.com/wp-content/uploads/2019/09/Kel-Suu-Kyrgyzstan-boat-1-1024x768.jpg" alt="" />
<div className='more'>
    <Stack spacing={1}>
    <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
    </Stack>
<h3>Lorem ipsum</h3>
<p>Lorem ipsum dolor, sit amet consectetur</p>
<h3 className='price'> <BiTimeFive size={24}/> 8:00-18:00 <h3>100$</h3></h3>
</div>
</div>
<div className='cart' >
  <img className='photo'src="https://www.journalofnomads.com/wp-content/uploads/2019/09/Kel-Suu-Kyrgyzstan-boat-1-1024x768.jpg" alt="" />
<div className='more'>
    <Stack spacing={1}>
    <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
    </Stack>
<h3>Lorem ipsum</h3>
<p>Lorem ipsum dolor, sit amet consectetur</p>
<h3 className='price'> <BiTimeFive size={24}/> 8:00-18:00 <h3>100$</h3></h3>
</div>
</div>
</div>
</div>
    </>
  )
}

export default Tours