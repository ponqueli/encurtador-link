import { FiLink } from 'react-icons/fi'
import './home.css'

export default function Home() {
    return (
      <div className="container-home">
        <div className="logo">
          <img src="/logo.png" alt="sujeito link logo"/>
          <h1>Contó's Links Shortener</h1>
          <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color='#fff'/>
            <input
              placeholder="Cole seu link aqui..." 
            />
          </div>
          <button>Shorter Link</button>
        </div>
      </div>
    );
  }
  
  