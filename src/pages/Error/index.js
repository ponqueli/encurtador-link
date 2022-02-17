import "./error.css";
import "animate.css";

import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container-error">
      <img src="./notfound.png" alt="erro 404 página não encontrada"/>
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar pro início</Link>
    </div>
  );
}
