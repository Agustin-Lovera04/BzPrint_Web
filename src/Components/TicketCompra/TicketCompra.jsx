import { useContext } from "react";
import { CartContext } from "../../Context/Cart_Context";
const TicketCompra = () => {
  const { vaciarCart, cart, total, metodoPago } = useContext(CartContext);
  let metodo 
  if(metodoPago === true){
    metodo = 'Transferencia'
  }else{
    metodo = 'Efectivo'
    
  }

  const numeroTelefono = "5493426128483";
  const handleForm = (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const especificaciones = document.getElementById("especificaciones").value;

    let productosTexto = cart
      .map(
        (prod, index) =>
          `*${index + 1}.* ${prod.nombre}
   📦 Cantidad: ${prod.cantidad}
   📝 Detalles: ${prod.detalles || "N/A"}
   💲 Precio unitario: $${(prod.precio).toFixed(2)}
   💰 Subtotal: $${(prod.precio * prod.cantidad).toFixed(2)}`
      )
      .join("\n\n");

    const mensaje = `✨ *¡Nueva Orden de Compra!* ✨
━━━━━━━━━━━━━━━━━━━━
📚 _"Que te dé gusto estudiar"_

👤 *Cliente:* ${nombre}
📍 *Dirección:* ${direccion}
📝 *Especificaciones:* ${especificaciones || "Ninguna"}
━━━━━━━━━━━━━━━━━━━━
🛒 *Productos:*
${productosTexto}
━━━━━━━━━━━━━━━━━━━━
📜 *Método de pago:* ${metodo}
💳 *Total a pagar:* $${total}
━━━━━━━━━━━━━━━━━━━━
🙌 ¡Gracias por elegir *Bz Print*!
Nos pondremos en contacto muy pronto para confirmar envío y pago. 📦😊
`;

    const messageEncoded = encodeURIComponent(mensaje);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${messageEncoded}`;
    window.open(whatsappURL, "_blank");

    vaciarCart();
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className="var-h1 text-center mb-4">Orden de compra</h1>
      <form className="col-10" onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label fw-semibold">
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label fw-semibold">
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            className="form-control"
            placeholder="Ingrese su dirección"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="especificaciones" className="form-label fw-semibold">
            Especificaciones del domicilio
          </label>
          <input
            type="text"
            id="especificaciones"
            className="form-control"
            placeholder="Especifique detalles del domicilio"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-4 mb-4">
          Confirmar Orden
        </button>
      </form>
    </div>
  );
};

export default TicketCompra;
