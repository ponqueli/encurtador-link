import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './home.css'
import 'animate.css'
import { saveLink } from '../../services/storeLinks'

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'
import api from '../../services/api'

export default function Home() {

  const [link, setLink] = useState('https://')
  const [data, setData] = useState({})
  const [qrCode, setQrCode] = useState('')
  //const [urlImg, setUrlImg] = useState('.logo.png')
  const [showModal, setShowModal] = useState(false)
  const [showToastError, setShowToastError] = useState(false)

  function showToast(message, position){
    toast.error(message, {
      toastId:'error-link-toast-id',
      position,
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  
  async function handleShortLink(){
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })
      setData(response.data)
      setShowModal(true)
      setQrCode(`https://api.qrserver.com/v1/create-qr-code/?data=${ response.data.link } &size=180x180`)
      saveLink('@encurtaLink', response.data)
    }catch{
      setShowToastError(true);
      showToast("Algo deu errado. Verifique se seu link está correto.", "top-center")
      setLink('')
     // setUrlImg('logo.png')
    }
  }

    return (
      <div className="container-home">
        <div className="logo">
        {/* {!showModal && (
          <img className='animate__animated animate__rubberBand' src="./logo.JPG" alt="encurtador link logo"/>
        )} */}
        {showModal && (
          <img className='animate__animated animate__rubberBand' src={qrCode} alt="qrCode"/>
        )}
          <h1>Contó's Links Shortener</h1>
          <p>Cole seu link para encurtar 👇<span className='pipe'>|</span></p>
        </div>

        <div className="area-input">
          <div className='animate__animated animate__shakeX animate__repeat-3 animate__delay-3s'>
            <FiLink size={24} color='#fff'/>
            <input
              placeholder="Cole seu link aqui..." 
              value={ link }
              onChange={(e) => setLink(e.target.value)}
              onKeyUp={(e) => (e.key === "Enter" ? handleShortLink() : {})}
            />
          </div>
          <button onClick={handleShortLink}>Encurtar Link</button>
        </div>
        <Menu/>
        { showModal && (
          <LinkItem 
            closeModal={ ()=> {
              setShowModal(false)
              setLink('https://')
             }
            }
            content={ data }  
          />
        )}

        { showToastError && (
          <ToastContainer
            theme="light"
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        )}
       
      </div>
    );
  }
  
  