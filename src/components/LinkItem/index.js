import "./link-item.css"
import 'animate.css'
import { FiX, FiClipboard } from "react-icons/fi"

export default function LinkItem({closeModal}) {
  return (
    <div className="modal-container animate__animated animate__zoomInDown">
      <div className="modal-header">
        <h2>Link Encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>http://jose.conto.com</span>
      <button className="modal-link">
        https://curto
        <FiClipboard size={20} color="#FFF"/>
      </button>
    </div>
  );
}
