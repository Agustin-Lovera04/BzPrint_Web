import "./Cart.Style.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/Cart_Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const [envio, setEnvio] = useState(1500);
  const [pagoConTransferencia, setPagoConTransferencia] = useState(false);
  const {
    cart,
    decCantidadEnCart,
    incCantidadEnCart,
    vaciarCart,
    total,
    setTotal,
    setMetodoPago,
  } = useContext(CartContext);

  const subtotal = cart.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );

  useEffect(() => {
    const recargo = pagoConTransferencia ? subtotal * 0.21 : 0;
    const nuevoTotal = subtotal + envio + recargo;
    setTotal(nuevoTotal.toFixed(2));
  }, [subtotal, envio, pagoConTransferencia, setTotal]);

  const cambioMetodoPago = (e) => {
    setPagoConTransferencia(e.target.checked);
    console.log(e.target.checked);
    setMetodoPago(e.target.checked);
  };

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
                  src={prod.image}
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
                <small className="d-md-none">Precio:</small> $ {prod.precio}
              </div>
              <div className="col-6 col-md-2 text-center prod_prices_cart">
                <small className="d-md-none">Subtotal:</small> $
                {prod.precio * prod.cantidad}
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
                  El costo base del envío es $1.500
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
                      <td>${subtotal}</td>
                      <td>${envio}</td>
                      <td className="fw-bold text-primary">${total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-warning">
                El pago mediante transferencia tiene un recargo del 21%
              </div>

              <div className="checkbox-wrapper-41 mt-2 mb-4 d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                <span>Efectivo</span>
                <input
                  type="checkbox"
                  checked={pagoConTransferencia}
                  onChange={cambioMetodoPago}
                />
                <span>Transferencia</span>
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
