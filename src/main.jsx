import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as bootstrap from "bootstrap";

import "./index.css";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import NoEncontrada from "./pages/NoEncontrada";
import Navbar from "./components/Navbar";
import { ProductosProvider } from "./contexts/ProductosContext";
import Alta from "./pages/Alta";
import { CarritoProvider } from "./contexts/CarritoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductosProvider>
      <CarritoProvider>
        <BrowserRouter>
          <Navbar />

          <main className="container">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/alta" element={<Alta />} />
              <Route path="*" element={<NoEncontrada />} />
            </Routes>
          </main>
          
        </BrowserRouter>
      </CarritoProvider>
    </ProductosProvider>
  </React.StrictMode>
);