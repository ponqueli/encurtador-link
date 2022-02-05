import { useState } from 'react'
import "./link-item.css"
import 'animate.css'
import { FiX, FiClipboard } from "react-icons/fi"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LinkItem({closeModal, content}) {

  const [showToastCopied, setShowToastCopied] = useState(false)

  async function showToast(message, position){
    toast.success(message, {
      toastId:'success-link-toast-id',
      position,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  async function copyLink(){
    await navigator.clipboard.writeText(content.link)
    setShowToastCopied(true)
    await showToast("Item copiado!", "bottom-center")
  }

  return (
    <div className="modal-container animate__animated animate__zoomInDown">
      <div className="modal-header">
        <h2>Link Encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span> { content.long_url } </span>
      <button className="modal-link" onClick={ copyLink }>
      { content.link }
        <FiClipboard size={20} color="#FFF"/>
      </button>
      
      { showToastCopied && (
        <ToastContainer
          theme="light"
          position="top-center"
          autoClose={3000}
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
