import { Link } from "react-router-dom";
import Carousel_Home from "../Carousel_Home/Carousel_Home";
import Sc2_Inicio from "../Sc2_Inicio/Sc2_Inicio";
import "./Home_Style.css";
import { useEffect } from "react";
import Products_Container from "../Products_Container/Products_Container";
import Card from "../Card/Card";

const phoneNumber = "5493425260028";
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
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="text-center var-h1">LIBRERÍA</h1>
        <div className="col-12 d-flex flex-row justify-content-center gap-md-4 gap-2 flex-wrap">
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
            className="col-12 col-md-6"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="var-h2">
              <span className="click-wrapper">
                Todo lo que
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
          <h1 className="var-h1 title_desktop">Impresiones/Anillados</h1>

          <div className="title_mobile">
            <h1 className="var-h1">Impresiones</h1>
            <hr />
            <h1 className="var-h1">Anillados</h1>
          </div>
        </div>

        <p className="var-txt text-center txt_impresiones_inicio">
          En BZprint te ofrecemos un servicio de impresiones rápidas, económicas
          y de calidad para que tengas tus apuntes siempre a tiempo. Ya sea que
          necesites fotocopias sueltas o anillados completos, nos adaptamos a
          tus necesidades con atención personalizada y materiales resistentes.
        </p>

        <div className="container steps_container  flex-wrap">
          <div className="row justify-content-around">
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
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  
                  <path
                    d="M8 10.5H16M8 14.5H11M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
                    stroke="#2E3C8C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <p className="text-light">Escribinos por whatsapp</p>
            </div>
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
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M17 19H21M19 17V21M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V12M9 17H12M9 13H15M9 9H10"
                    stroke="#2E3C8C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <p className="text-light">
                Nos envias el archivo que queres imprimir
              </p>
            </div>
            <div
              className="step col-md-2 col-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <svg
                fill="#2E3C8C"
                width="100px"
                height="100px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>ionicons-v5-i</title>
                  <path d="M64,144H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32Z"></path>
                  <path d="M448,368H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z"></path>
                  <path d="M448,240H221.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32h66.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z"></path>
                </g>
              </svg>
              <p className="text-light">
                Nos indicas las caracteristicas del pedido
              </p>
            </div>
            <div
              className="step col-md-2 col-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1100"
            >
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="#2E3C8C"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  
                  <g id="Layer_2" data-name="Layer 2">
                    
                    <g id="invisible_box" data-name="invisible box">
                      
                      <rect width="48" height="48" fill="none"></rect>{" "}
                    </g>
                    <g id="Health_Icons" data-name="Health Icons">
                      
                      <g>
                        
                        <path d="M37.7,11.1A3,3,0,0,0,35.4,10H34.2l.3-1.7A3.1,3.1,0,0,0,33.9,6a3.2,3.2,0,0,0-2.2-1H7.8a2,2,0,0,0,0,4H30.3l-4,22.9a6.8,6.8,0,0,0-1,2.1H20.7A7,7,0,0,0,7.3,34H6.2l.5-2.9a2,2,0,0,0-1.6-2.3,2,2,0,0,0-2.3,1.6L2,34.7A2.8,2.8,0,0,0,2.7,37a2.8,2.8,0,0,0,2.1,1H7.3a7,7,0,0,0,13.4,0h4.6a7,7,0,0,0,13.4,0h2a3.2,3.2,0,0,0,3.1-2.7L46,22.5ZM14,39a3,3,0,0,1-3-3,3,3,0,0,1,6,0A3,3,0,0,1,14,39ZM33.5,14h1.3l5.9,8H32.1ZM32,39a3,3,0,0,1-3-3,3,3,0,0,1,6,0A3,3,0,0,1,32,39Zm8-5H38.7A7,7,0,0,0,32,29H30.9l.5-3.1h9.9Z"></path>
                        <path d="M4,15H14a2,2,0,0,0,0-4H4a2,2,0,0,0,0,4Z"></path>
                        <path d="M15,19a2,2,0,0,0-2-2H5a2,2,0,0,0,0,4h8A2,2,0,0,0,15,19Z"></path>
                        <path d="M6,23a2,2,0,0,0,0,4h6a2,2,0,0,0,0-4Z"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="text-light">Abonas y te lo enviamos</p>
            </div>
          </div>
        </div>
        <h3 className="var-h3 mt-4 pt-md-4 pt-2">¡Si, asi de facil!</h3>
        <a href={whatsappURL} className="text-decoration-none btn fs-5">
          Realiza tu pedido ahora
        </a>
      </div>

      <div
        className="container ig_sec p-4 m-4 shadow bg-light"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h3 className="d-flex align-items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-instagram"
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
          <div className="insta-post">
            <iframe
              src="https://cdn.iframe.ly/api/iframe?app=1&url=https://www.instagram.com/p/DLisxHUJh0A/&key=925108d922be940af814f71907a7df4b"
              title="Post 1"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="insta-post">
            <iframe
              src="https://cdn.iframe.ly/api/iframe?app=1&url=https://www.instagram.com/p/DMqrlWXi4me/&key=925108d922be940af814f71907a7df4b"
              title="Post 2"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
