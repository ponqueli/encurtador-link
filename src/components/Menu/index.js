import './menu.css'
import 'animate.css'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
           <a 
            className='social animate__animated animate__rollIn' 
            href="https://www.linkedin.com/in/jose-conto/" 
            target="_blank" 
            rel="noopener noreferrer"> 
                <BsLinkedin className='hover' color='#FFF' size={25}/>
           </a>
           <a 
            className='social animate__animated animate__rollIn' 
            href="https://www.instagram.com/jose.conto/" 
            target="_blank" 
            rel="noopener noreferrer">
                <BsInstagram className='hover' color='#FFF' size={25}/>
           </a>
           <Link className='menu-item animate__animated animate__bounceInDown' to="/links">
            Meus Links
           </Link>
        </div>
    )
}