import { FiLink } from 'react-icons/fi'
import './home.css'
import 'animate.css'

import Menu from '../../components/Menu/index'

export default function Home() {
    return (
      <div className="container-home">
        <div className="logo">
          <img className='animate__animated animate__rubberBand' src="/logo.png" alt="sujeito link logo"/>
          <h1>Contó's Links Shortener</h1>
          <p>Cole seu link para encurtar 👇<span>|</span></p>
        </div>

        <div className="area-input">
          <div className='animate__animated animate__shakeX animate__repeat-3 animate__delay-3s'>
            <FiLink size={24} color='#fff'/>
            <input
              placeholder="Cole seu link aqui..." 
            />
          </div>
          <button>Shorter Link</button>
        </div>
        <Menu/>
      </div>
    );
  }
  
  