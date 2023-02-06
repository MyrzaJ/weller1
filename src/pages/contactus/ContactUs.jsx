import React from 'react'
import {AiOutlineHome, } from "react-icons/ai"
import {MdArrowForwardIos} from 'react-icons/md'




const ContactUs = () => {
  return (
    <div>
        <div style={{display:'flex', alignItems:'center',  padding: '1% 15%'}} ><AiOutlineHome color='#8e8e8e'/> <MdArrowForwardIos color='#8e8e8e' style={{margin:'0 10px'}}/> <p style={{color:'#8e8e8e'}}>Связаться с нами</p></div>

        
        <div className='contentabout'>
        <h2>Контактная информация</h2>
       <br />

<p>
Вы можете делать покупки на Weller по самой низкой цене прямо с завода, а затем вам придется самостоятельно доставлять и оформлять товар. На самом деле, это не так сложно, как может показаться. <br /> <br />


Но, если вы не хотите заниматься этим самостоятельно, наши партнеры по аутсорсингу могут организовать для вас все эти этапы самостоятельно.
</p>
       <hr />
       </div>
      <div>
      <h3>Отправьте нам сообщение</h3>
      </div>
    </div>
  )
}

export default ContactUs