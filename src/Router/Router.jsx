import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Components/Home/Home"
import Layout from "../Components/Layout/Layout"
import Cart from "../Components/Cart/Cart"
import Impresiones from "../Components/Impresiones/Impresiones"
import Libreria from "../Components/Libreria/Libreria"
import Get_Product_Detail from "../Components/Get_Product_Detail/Get_Product_Detail"
import TicketCompra from "../Components/TicketCompra/TicketCompra"

const Router = () => {
  return (
    <BrowserRouter basename="/BzPrint-Web">
    <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/impresiones" element={<Impresiones />} />
          <Route path="/libreria" element={<Libreria />} />
          <Route path="/libreria/:codigo" element={<Get_Product_Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ticketCompra" element={<TicketCompra />} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router