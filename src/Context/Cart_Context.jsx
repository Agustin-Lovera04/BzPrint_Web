import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({});


export const CartProvider = ({ children }) => {
    const [total, setTotal] = useState(0)
    const [metodoPago, setMetodoPago] = useState()
  const [cart, setCart] = useState(() => {
    const getSavedCart = sessionStorage.getItem("cart");
    return getSavedCart ? JSON.parse(getSavedCart) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
  const vaciarCart = () => {
    setCart([]);
  };

  const aggProdEnCart = (prod, cantidad, detalles) => {
    const { codigo } = prod;

    if (!detalles || detalles == null) {
      detalles: "-";
    }
    try {
      let copiaCart = [...cart];
      let existeProd = copiaCart.findIndex((p) => p.codigo === codigo);
      if (existeProd === -1) {
        prod.cantidad = cantidad;
        prod.detalles = detalles;
        copiaCart.push(prod);
      } else {
        copiaCart[existeProd].cantidad += cantidad;
      }

      setCart(copiaCart);
      return { succes: true };
    } catch (error) {
      return { error: error.message };
    }
  };

  const eliminarProd = (codigo) => {
    let copiaCart = cart.filter((p) => p.codigo !== codigo);
    setCart(copiaCart);
  };

  const decCantidadEnCart = (codigo) => {
    setCart((prevCart) => {
      const productoIndex = prevCart.findIndex((p) => p.codigo === codigo);

      if (productoIndex !== -1 && prevCart[productoIndex].cantidad > 1) {
        const nuevoCart = [...prevCart];
        nuevoCart[productoIndex].cantidad -= 1;
        return nuevoCart;
      }
      return prevCart;
    });
  };

  const incCantidadEnCart = (codigo) => {
    setCart((prevCart) => {
      const productoIndex = prevCart.findIndex((p) => p.codigo === codigo);

      if (productoIndex !== -1) {
        const nuevoCart = [...prevCart];
        nuevoCart[productoIndex].cantidad += 1;
        return nuevoCart;
      }
      return prevCart;
    });
  };

  const contador = () => {
    return cart.length;
  };

  

  const functionsContext = {
    total,
    setTotal,
    cart,
    vaciarCart,
    aggProdEnCart,
    eliminarProd,
    decCantidadEnCart,
    incCantidadEnCart,
    contador,
    metodoPago,
    setMetodoPago
  };

  return (
    <CartContext.Provider value={functionsContext}>
      {children}
    </CartContext.Provider>
  );
};
