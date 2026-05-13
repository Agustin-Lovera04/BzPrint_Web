import { Link, useNavigate } from "react-router-dom";
import "./Libreria_Style.css";
import { useEffect } from "react";
import Products_Container from "../Products_Container/Products_Container";

const Libreria = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.AOS.init({
      duration: 1000,
    });
  }, []);

  const handleBusquedaNombre = (e) => {
    e.preventDefault();

    const input = document.getElementById("busquedaNombre");
    const busquedaNombre = input.value;

    navigate(`/libreria?nombre=${busquedaNombre}`);

    input.value = "";
  };

  return (
    <div className="container-fluid">
      <div className="p-0 m-0 sc1_libreria">
        <h1 className="var-h1 text-center p-2">Tienda</h1>

        <div className="row justify-content-center row_ppal_grid_libreria">
          <div
            className="col-7 img1_grid_container"
            data-aos="zoom-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img
              src="./images/grid1_libreria.png"
              alt="libreria"
              className="img1_grid img-fluid"
            />
          </div>

          <div className="col-4 d-flex flex-column gap_grid p-0">
            <div
              className="img2_grid_container d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="900"
            >
              <h3 className="title_img_grid">Pizarras</h3>
              <button className="btn">
                <Link to={"/libreria?nombre=pizarra"}>Ver más</Link>
              </button>
            </div>
            <div
              className="img3_grid_container d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="900"
            >
              <h3 className="title_img_grid text-light">Carpetas</h3>
              <button className="btn">
                <Link to={"/libreria?nombre=carpeta"}>Ver más</Link>
              </button>
            </div>
          </div>
        </div>

        <div
          className="row justify-content-center row2_grid_libreria"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div
            className="col-11 img1_grid_container"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <img
              src="./images/grid4_libreria.png"
              alt="libreria"
              className="img1_grid img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="sc2_libreria">
        <div className="row row_filters_libreria">
          <div className="col-md-5 col-8 input_buscar">
            <form onSubmit={handleBusquedaNombre}>
              <input
                type="text"
                placeholder="Buscar producto"
                id="busquedaNombre"
              />
              <button className="btn" type="submit">
                Buscar
              </button>
            </form>
          </div>

          <div className="btn_categorias_container_mobile btn col-4 text-center">
            <button
              className="btn btn_categorias_mobile dropdown-toggle"
              type="button"
              id="dropdownCategorias"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorías
            </button>
            <ul
              className="dropdown-menu dropdown-menu-start"
              aria-labelledby="dropdownCategorias"
            >
              <li>
                <Link
                  className="dropdown-item"
                  to={"/libreria?category=Librería"}
                >
                  Librería
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/libreria?category=Papelería"
                >
                  Papelería
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/libreria?category=Accesorios útiles"
                >
                  Accesorios útiles
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/libreria?category=Electrónica"
                >
                  Electrónica
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/libreria?category=Mates, vasos y botellas"
                >
                  Mates - vasos y botellas
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/libreria?category=Oficina">
                  Oficina
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/libreria">
                  Limpiar filtros
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex">
          <div className="col-2 box_categorias">
            <h4 className="fw-bold">Categorías</h4>
            <div className="d-flex flex-column">
              <hr />
              <Link
                to={"/libreria?category=Librería"}
                className="text-muted var-txt text-decoration-none"
              >
                Librería
              </Link>
              <hr />
              <Link
                to={"/libreria?category=Papelería"}
                className="text-muted var-txt text-decoration-none"
              >
                Papelería
              </Link>
              <hr />
              <Link
                to={"/libreria?category=Accesorios útiles"}
                className="text-muted var-txt text-decoration-none"
              >
                Accesorios útiles
              </Link>
              <hr />
              <Link
                to={"/libreria?category=Electrónica"}
                className="text-muted var-txt text-decoration-none"
              >
                Electrónica
              </Link>
              <hr />
              <Link
                to={"/libreria?category=Mates, vasos y botellas"}
                className="text-muted var-txt text-decoration-none"
              >
                Mates - vasos y botellas
              </Link>
              <hr />
              <Link
                to={"/libreria?category=Oficina"}
                className="text-muted var-txt text-decoration-none"
              >
                Oficina
              </Link>
              <hr />
              <Link
                to={"/libreria"}
                className="text-muted var-txt text-decoration-none"
              >
                Limpiar filtros
              </Link>
            </div>
          </div>
          <div className="cards_container_libreria">
            <Products_Container />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Libreria;
