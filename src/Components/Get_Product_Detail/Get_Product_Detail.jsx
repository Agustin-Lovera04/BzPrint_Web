import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/client";
import { doc, getDoc, query, where } from "firebase/firestore";
import Product_Detail from "../Product_Detail/Product_Detail";
import Spin from "../Spin/Spin";

const Get_Product_Detail = () => {
  const [product, setProduct] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { codigo } = useParams();

  const prodRef = doc(db, "PRODUCTS", codigo);

  useEffect(() => {
    const getProduct = async () => {
      try {
        if (codigo) {
          const data = await getDoc(prodRef);
          if (data.exists()) {
            setProduct(data.data());
            setLoading(false);
          } else {
            setLoading(false);

            setError(
              "No se encontro producto - Contactenos por los medios disponibles, y continuaremos con su compra."
            );
          }
        } else {
          setLoading(false);

          setError(
            "Error interno - Contactenos por los medios disponibles, y continuaremos con su compra."
          );
        }
      } catch (error) {
        setLoading(false);

        setError(error.message);
      }
    };
    getProduct();
  }, [codigo]);

  return (
    <>
      {error ? (
        <div className="alert alert-danger col-8">{error}</div>
      ) : (
        <>
          {loading ? (
            <Spin />
          ) : (
            <>
              <Product_Detail prod={product} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Get_Product_Detail;
