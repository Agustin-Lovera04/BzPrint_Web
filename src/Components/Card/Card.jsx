import { Link } from "react-router-dom";
import "./Card_Style.css";

const Card = ({ prod }) => {
  return (
    <div className="card">
      <div className="card__shine"></div>
      <div className="card__glow"></div>
      <div className="card__content">
        {prod.badge && <div className="card__badge">{prod.badge}</div>}
        <div className="card__image__container">
          <img src={prod.URLIMAGE[0]} alt="" className="card__image" />
        </div>
        <div className="card__text">
          <p className="card__title">{prod.nombre}</p>
        </div>
        <div className="card__footer">
          <div className="card__price">
            Efect <span className="fw-bold">${prod.precio_efectivo}</span>
            <br />
            <span className="card_price_transf text-muted">
              Transf ${prod.precio_transferencia}
            </span>
          </div>
          <div className="card__button align-items-center">
            <Link className="text-light d-flex" to={`/libreria/${prod.codigo}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
