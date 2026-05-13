import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/client";
import Render_Products from "../Render_Products/Render_Products";
import { useSearchParams } from "react-router-dom";
import Spin from "../Spin/Spin";

const Products_Container = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsToRender, setProductsToRender] = useState([]);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const page = searchParams.get("page") || "1";
  const busquedaNombre = searchParams.get("nombre");

  const productsRef = collection(db, "PRODUCTS");
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getDocs(productsRef);
        const prodsData = data.docs.map((p) => ({
          ...p.data(),
        }));
        setProducts(prodsData);
        setLoading(false);
      } catch (error) {
        setError(
          "Hubo un error al recuperar los productos. Inténtalo nuevamente más tarde o contáctanos vía WhatsApp."
        );
        setLoading(false);
      }
    };
    getProducts();
  }, []);


  useEffect(() => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (busquedaNombre) {
      filtered = filtered.filter((producto) =>
        producto.nombre.toLowerCase().includes(busquedaNombre.toLowerCase())
      );
    }

    if (busquedaNombre && filtered.length === 0) {
      setError("No se encontró un producto con el nombre ingresado");
    } else {
      setError(null);
    }

    setProductsToRender(filtered);
  }, [products, category, busquedaNombre]);

  return (
    <div className="cards-container">
      {loading ? (
        <Spin/>
      ) : error ? (
        <div className="alert alert-warning m-2">{error}</div>
      ) : (
        <>
          <Render_Products
            prods={productsToRender}
            page={parseInt(page)}
            setSearchParams={setSearchParams}
            category={category}
          />
        </>
      )}
    </div>
  );
};

export default Products_Container;
