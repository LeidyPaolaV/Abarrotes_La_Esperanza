import React from "react";
import "./Banner.css"
export function Banner() {
  return (
    <>
      <div className="container-fluid text-center p-5 bannerfondo text-white fw-bold">
        <div className="row">
          <div className="col-12">
        
            <i className="bi bi-truck mx-3 fs-2 p-3"></i>zona de cobertura
            <i className="bi bi-phone mx-3 fs-2 p-3"></i>domicilio
            <i className="bi bi-tags mx-3 fs-2 p-3"></i>nuestros precios
            <i className="bi bi-geo-alt mx-3 fs-2 p-3"></i>nuestros puntos de venta
          </div>
        </div>
      </div>
    </>
  );
}
