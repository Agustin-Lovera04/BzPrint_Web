import Gallery_Prod_Detail from "../Gallery_Prod_Detail/Gallery_Prod_Detail";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/Cart_Context";

const Product_Detail = ({ prod }) => {
  const [cantidad, setCantidad] = useState(1);
  const [detalles, setDetalles] = useState(null);
  const { aggProdEnCart } = useContext(CartContext);
const toast = () => {
  Toastify({
    text: "✔ Producto agregado correctamente", 
    className: "info",
    style: {
      background: "#FFDD88", 
      color: "#000000ff", 
      padding: "30px",
      borderRadius: "8px",
    },
    duration: 3000, 
    gravity: "bottom", 
    position: "right", 
    stopOnFocus: true, 
  }).showToast();
};


  return (
    <div className="d-flex flex-md-row flex-column  justify-content-md-around justify-content-center align-items-center align-items-md-start">
      <div className="col-md-6 col-12 p-3">
        <Gallery_Prod_Detail images={prod.URLIMAGE} />
      </div>
      <div className="col-md-6 col-12 p-3">
        <h3 className="var-h3">{prod.nombre}</h3>
        <p className="text-muted">Codigo: {prod.codigo}</p>
        <h3 className="fw-bold">Precio: $ {prod.precio_efectivo} </h3>
        <p className="var-txt">
          Precio con transferencia: $ {prod.precio_transferencia}{" "}
        </p>
        <div className="d-flex align-items-center gap-4 mb-4 bt-4">
          <button
            className="btn bg-danger text-light"
            onClick={() =>
              setCantidad((prev) => {
                if (prev > 1) {
                  return prev - 1;
                }
                return prev;
              })
            }
          >
            -
          </button>
          <p className="var-txt m-0">{cantidad}</p>
          <button
            className="btn bg-success text-light"
            onClick={() => setCantidad((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <input
          className="form-control py-2"
          type="text"
          name="detalles"
          id="detalles"
          placeholder="Especifiaciones del producto: ej: color azul"
          value={detalles}
          onChange={(e) => setDetalles(e.target.value)}
        />
        <button
          className="btn mt-4 fs-4"
          onClick={() => {
            aggProdEnCart(
              {
                codigo: prod.codigo,
                nombre: prod.nombre,
                precio: prod.precio_efectivo,
                image: prod.URLIMAGE[0],
              },
              cantidad,
              detalles
            );
            toast();
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Product_Detail;
