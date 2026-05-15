import "./Cart.Style.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/Cart_Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const [envio] = useState(0);

  const {
    cart,
    decCantidadEnCart,
    incCantidadEnCart,
    vaciarCart,
    total,
    setTotal,
  } = useContext(CartContext);

  const getPrecio = (prod) => {
    const precio = Number(prod.precio);
    return isNaN(precio) ? 0 : precio;
  };

  const subtotal = cart.reduce(
    (acc, prod) => acc + getPrecio(prod) * prod.cantidad,
    0
  );

  useEffect(() => {
    const nuevoTotal = subtotal + envio;
    setTotal(nuevoTotal.toFixed(2));
  }, [subtotal, envio, setTotal]);

  return (
    <div className="container-fluid">
      <h1 className="text-center var-h1">Carrito</h1>

      {cart.length === 0 ? (
        <div className="row d-flex justify-content-center">
          <h4 className="alert alert-warning w-50 text-center">
            Debe agregar productos al carrito
          </h4>
        </div>
      ) : (
        <>
          <div className="row justify-content-around d-none d-md-flex">
            <div className="col-md-4 text-center titles_cart fw-bold">
              Producto
            </div>
            <div className="col-md-4 text-center titles_cart fw-bold">
              Cantidad
            </div>
            <div className="col-md-2 text-center titles_cart fw-bold">
              Precio
            </div>
            <div className="col-md-2 text-center titles_cart fw-bold">
              Subtotal
            </div>
          </div>

          {cart.map((prod) => (
            <div
              key={prod.codigo}
              className="row align-items-center mb-3 p-2 border rounded shadow-sm flex-column flex-md-row"
            >
              <div className="col-12 col-md-2 text-center mb-2 mb-md-0">
                <img
                  src={prod.image || prod.URLIMAGE?.[0] || ""}
                  alt={prod.nombre}
                  className="img_prod_cart img-fluid"
                  style={{ maxHeight: "100px", borderRadius: "1rem" }}
                />
              </div>

              <div className="col-12 col-md-2 d-flex align-items-center justify-content-center mb-2 mb-md-0 prod_nombre_cart">
                <span>{prod.nombre}</span>
              </div>

              <div className="col-12 col-md-4 d-flex justify-content-center align-items-center mb-2 mb-md-0">
                <button
                  className="btn bg-danger text-light btn_cantidad_cart me-2"
                  onClick={() => decCantidadEnCart(prod.codigo)}
                >
                  -
                </button>

                <p className="var-txt m-0 px-2">{prod.cantidad}</p>

                <button
                  className="btn bg-success text-light btn_cantidad_cart ms-2"
                  onClick={() => incCantidadEnCart(prod.codigo)}
                >
                  +
                </button>
              </div>

              <div className="col-6 col-md-2 text-center prod_prices_cart">
                <small className="d-md-none">Precio:</small> ${(getPrecio(prod)).toFixed(2)}
              </div>

              <div className="col-6 col-md-2 text-center prod_prices_cart">
                <small className="d-md-none">Subtotal:</small> $
                {(getPrecio(prod) * prod.cantidad).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="row justify-content-around align-items-start sc2_row_cart">
            <div className="col-12 col-md-4 d-flex flex-md-column flex-column-reverse justify-content-center align-items-center gap-3 mb-4">
              <button
                className="btn btn-danger btn-custom-width"
                onClick={() => vaciarCart()}
              >
                Vaciar carrito
              </button>

              <div className="alert alert-warning mb-0">
                <h4>Costo Envío</h4>
                <p className="text-dark mb-0">
                  Costo de envio (a acordar)
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
              <div className="table-responsive">
                <table className="table table-bordered table-hover mt-3 text-center mb-3">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">Costo</th>
                      <th scope="col">Envío</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>${subtotal.toFixed(2)}</td>
                      <td>${envio}</td>
                      <td className="fw-bold text-primary">${total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Link to={"/ticketCompra"} className="text-center">
                <button className="btn btn-primary mb-4 btn-custom-width">
                  Confirmar compra
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;