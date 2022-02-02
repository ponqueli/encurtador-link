import "./links.css";
import 'animate.css';
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#FFF" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      <div className="links-item">
        <button className="button-link">
          <FiLink size={18} color="#FFF" />
          https://github.com/ponqueli asdfasdfasdfasdfa asdfasdfasdfasdfasdfasdfasdfas kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        </button>

        <button className="button-delete">
          <FiTrash size={24} color="#FF5454" />
        </button>
      </div>
    </div>
  );
}
