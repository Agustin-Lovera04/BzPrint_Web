import { Link } from "react-router-dom";
import Carousel_Home from "../Carousel_Home/Carousel_Home";
import Sc2_Inicio from "../Sc2_Inicio/Sc2_Inicio";
import "./Home_Style.css";
import { useEffect } from "react";
import Products_Container from "../Products_Container/Products_Container";
import Card from "../Card/Card";

const phoneNumber = "5493426128483";
const message = `Hola! Quiero realizar un pedido de ...`;
const messageEncoded = encodeURIComponent(message);
const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageEncoded}`;

const cardsData = [
  {
    badge: "DESTACADO",
    codigo: "9887m",
    nombre: "Velador led metal color one touch en caja",
    precio_efectivo: "24079.71",
    precio_transferencia: "30480.65",
    URLIMAGE: [
      "https://firebasestorage.googleapis.com/v0/b/bz-print-9007b.firebasestorage.app/o/images%2Fd7d0cb56-ac53-466e-a7ed-7b673e1652f7.jpg?alt=media&token=e5d3597f-e951-41f5-83d0-ab114ffb5041",
    ],
  },
  {
    badge: "DESTACADO",
    codigo: "33169m",
    nombre: "Auriculares inalambricos AS6 - en caja - 14 x 8 x",
    precio_efectivo: "11684.06",
    precio_transferencia: "14789.95",
    URLIMAGE: [
      "https://firebasestorage.googleapis.com/v0/b/bz-print-9007b.firebasestorage.app/o/images%2FOh09B063J08TtESC3ovAOfLXStvIiOfOrLAEKCm8.jpg?alt=media&token=566b32be-d2f6-4fda-8500-aa66b67e9346",
    ],
  },
  {
    badge: "DESTACADO",
    codigo: "110010",
    nombre: "CUADERNILLO A4 T/B HUSARES COLOR x80h. ",
    precio_efectivo: "3485.51",
    precio_transferencia: "4412.04",
    URLIMAGE: [
      "https://firebasestorage.googleapis.com/v0/b/bz-print-9007b.firebasestorage.app/o/images%2F129af6eb-b3a4-496f-a2e8-bd0ae703bad6.jpg?alt=media&token=37ffe9d7-5f8e-4e94-aaef-0c52f81aee34",
    ],
  },
  {
    badge: "DESTACADO",
    codigo: "35292",
    nombre: "RESALTADOR FILGO FINO PASTEL x6u. ",
    precio_efectivo: "2359.42",
    precio_transferencia: "2986.61",
    URLIMAGE: [
      "https://www.eloncemayorista.com.ar/system_files/articulos/imagenes/0110/35292.jpg?d=",
    ],
  },
];

const Home = () => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);
  useEffect(() => {
    window.AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container-fluid">
      <Carousel_Home />
      <Sc2_Inicio />
      <div
        className="libreria_inicio_container"
      >
        <h1 className="text-center var-h1">LIBRERÍA</h1>
        <div className="col-12 d-flex flex-row justify-content-center gap-md-4 gap-2 flex-wrap"         data-aos="fade-up"
        data-aos-duration="2000">
          {cardsData.map((p) => (
            <Card key={p.codigo} prod={p} />
          ))}
        </div>

        <div className="text-center m-4">
          <Link to={"/libreria"}>
            <button className="btn btn-tienda">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#3F52BF"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
              Tienda
            </button>
          </Link>
        </div>
      </div>

      <div className="container mb-2">
        <div className="row align-items-center">
          <div
            className="col-12 col-md-6 slogan_inicio"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="var-h2">
              <span className="click-wrapper">
                Todo lo que&nbsp;
                <span className="svg-click-inicio">
                  <svg
                    width="130px"
                    height="130px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFDD88"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 7L5.5 5.5M15 7L16.5 5.5M5.5 16.5L7 15M11 5L11 3M5 11L3 11M17.1603 16.9887L21.0519 15.4659C21.4758 15.3001 21.4756 14.7003 21.0517 14.5346L11.6992 10.8799C11.2933 10.7213 10.8929 11.1217 11.0515 11.5276L14.7062 20.8801C14.8719 21.304 15.4717 21.3042 15.6375 20.8803L17.1603 16.9887Z" />
                  </svg>
                </span>
              </span>
              necesitas para el estudio a
              <mark className="p-0"> solo un clic</mark>
            </h2>
          </div>
          <div
            className="col-12 col-md-6 text-md-end text-center"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img
              src="./images/articulosLibreria.png"
              alt="libreria"
              className="img_Sc3_Incio"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid d-flex flex-column justify-content-center align-items-center impresiones_inicio_container text-center">
        <div
          className="title-container"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1 className="var-h1 title_desktop">BZ Mayorista</h1>

          <div className="title_mobile">
            <h1 className="var-h1">BZ Mayorista</h1>
          </div>
        </div>

        <p className="var-txt text-center txt_impresiones_inicio">
          Acá venís a comprar mejor, no más caro.
          Precios reales para que ganes más en cada venta.
          Stock listo para despachar, sin vueltas y directo a tu negocio.

          Trabajamos con librería, bazar, marroquinería, tecnología y productos en tendencia para que puedas revender con buena rotación y mejor margen.

          Si querés crecer en serio, estás en el lugar correcto.
          Comprá hoy. Vendé mejor mañana.
        </p>

        <div className="container steps_container  flex-wrap">
          <div className="row justify-content-around">
            {/* PASO 1: Carrito de compras */}
            <div
              className="step col-md-2 col-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.29971 5H21L19 12H7.37671M2 2H5.19971L6.99971 17H19M9 21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20C8.55228 20 9 20.4477 9 21ZM20 21C20 21.5523 19.5523 22 19 22C18.4477 22 18 21.5523 18 21C18 20.4477 18.4477 20 19 20C19.5523 20 20 20.4477 20 21Z"
                  stroke="#2E3C8C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-light">
                <strong>Agregás al carrito</strong>
                <br />
                Elegí todos los productos que quieras para tu negocio
              </p>
            </div>

            {/* PASO 2: Validación / Tarjeta con Check */}
            <div
              className="step col-md-2 col-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5H22M21 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H12M9.5 15H5.5M15 15L17.5 17.5L22.5 12.5"
                  stroke="#2E3C8C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-light">
                <strong>Superás el mínimo</strong>
                <br />
                Tu pedido debe superar los $50.000 mayoristas.
              </p>
            </div>

            {/* PASO 3: Mensaje / WhatsApp */}
            <div
              className="step col-md-2 col-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48664 15.5291 3.33714 17L2 22L7 20.6629C8.47087 21.5134 10.1786 22 12 22ZM8 10H16M8 14H14"
                  stroke="#2E3C8C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-light">
                <strong>Nos llega por WhatsApp</strong>
                <br />
                Recibimos automáticamente tu pedido y coordinamos todo con vos.
              </p>
            </div>

            {/* PASO 4: Envío / Camión */}
            <div
              className="step col-md-2 col-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1100"
            >
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 10H14M14 10H18.5L22 13.5V18H14M14 10V18M1 10V18H14M4 18C4 19.1046 4.89543 20 6 20C7.10457 20 8 19.1046 8 18M4 18C4 16.8954 4.89543 16 6 16C7.10457 16 8 16.8954 8 18M16 18C16 19.1046 16.8954 20 18 20C19.1046 20 20 19.1046 20 18M16 18C16 16.8954 16.8954 16 18 16C19.1046 16 20 16.8954 20 18M1 6H10M1 14H6"
                  stroke="#2E3C8C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-light">
                <strong>Abonás y despachamos</strong>
                <br />
                Pagás fácil y dejamos el stock listo para enviar.
              </p>
            </div>
          </div>
        </div>
        <h3 className="var-h3 mt-4 pt-md-4 pt-2">¡Si, asi de facil!</h3>
        <a href={whatsappURL} className="text-decoration-none btn fs-5" target="_blank">
          ARMAR MI PEDIDO
        </a>
      </div>

      <div
        className="container ig_sec p-4 my-4 mx-auto shadow bg-light"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h3 className="d-flex align-items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
          Seguinos en Instagram
        </h3>
        <a
          href="https://www.instagram.com/bzprint_/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn mb-2"
        >
          Ir al perfil
        </a>
        <div className="insta-grid">

          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DXZjzVtDepc/"
            data-instgrm-version="14"
          ></blockquote>

          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DXPAhWyDdks/"
            data-instgrm-version="14"
          ></blockquote>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DXWpuYnDcXm/"
            data-instgrm-version="14"
          ></blockquote>
        </div>
      </div>
    </div>
  );
};

export default Home;
