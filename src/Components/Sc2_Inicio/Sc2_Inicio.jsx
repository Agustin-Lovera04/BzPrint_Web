import { Link } from 'react-router-dom'
import './Sc2_Inicio_Style.css'

const Sc2_Inicio = () => {
  return (
    <div className="container sc2-container d-flex justify-content-center gap-md-3 gap-1 flex-wrap">
        <div className="col-md-4 col-6 box box1" data-aos="fade-right" data-aos-duration="1500">
          Fibrones
          <button className='btn box_btn'>
            <Link to={'/libreria?category=Librería'}>
            Ver mas
            </Link>
          </button>
        </div>
        <div className="col-md-4 col-6 box box2 text-center" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">
          Esenciales del estudiante
          <button className='btn box_btn'>
            <Link to={'/libreria?category=Librería'}>
              Ver mas
            </Link>
          </button>
        </div>
        <div className="col-md-4 col-6 box box3" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600">
          Cuadernillos
          <button className='btn box_btn'>
            <Link to={'/libreria?category=Papelería'}>Ver mas</Link>
          </button>
        </div>
    </div>
  )
}

export default Sc2_Inicio