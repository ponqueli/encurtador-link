import { useState, useEffect } from 'react'
import "./links.css";
import 'animate.css';
import "react-toastify/dist/ReactToastify.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom'
import { getLinksSaved, deleteLink } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem';

export default function Links() {

  const [myLinks, setMyLinks] = useState([])
  const [data, setData] =  useState({})
  const [showModal, setShowModal]  = useState(false)
  const [emptyList, setEmptyList] = useState(false)
  const [showToastDeleted, setShowToastDeleted] = useState(false)

  useEffect(()=>{
    async function getLinks(){
      const result = await getLinksSaved('@encurtaLink')
      if(result.length === 0){
        setEmptyList(true)
      }

      setMyLinks(result)
    }

    getLinks()
  }, [])

  async function showToast(message, position){
    toast.success(message, {
      toastId:'success-deleted-link-toast-id',
      position,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function handleOpenLink(link){
    setData(link)
    setShowModal(true)
  }

  async function handleDelete(id){
   const actualLinks = await deleteLink(myLinks, id)
   if(actualLinks.length === 0){
    setEmptyList(true)
   }
   setShowToastDeleted(true)
   await showToast("Item excluído com sucesso!", "top-center")
   setMyLinks(actualLinks)
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#FFF" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      { myLinks.map( link =>(
        <div key={link.id} className="links-item hover">
          <button className="button-link" onClick={()=> handleOpenLink(link)}>
            <FiLink size={18} color="#FFF" />
            { link.long_url }
          </button>

          <button className="button-delete" onClick={()=> handleDelete(link.id)}>
            <FiTrash size={24} color="#FF5454" />
          </button>
        </div>
      )) }

      {emptyList && (
        <div className='links-item'>
          <h2 className='empty-text'>Sua lista está vazia...</h2>
        </div>
      )}

      {showModal && (
        <LinkItem
          closeModal={()=> setShowModal(false)}
          content={data}
        />
      )}

      { showToastDeleted && (
        <ToastContainer
          theme="light"
          position="top-center"
          autoClose={2000}
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
