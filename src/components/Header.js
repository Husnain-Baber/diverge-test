import React from "react";
import logo from "../img/logo.png";
import arrowUp from "../img/arrow-up.png";
import check from "../img/check.png";

function Header() {
  return (
    <header className="header">
        <div className="container-fluid h-100">
            <div className="d-flex align-items-center justify-content-between h-100">
                <div className="logo">
                    <img src={logo} alt="Diverge Logo" />
                </div>
                <div className="btn-wrapper">
                    <button className="btn btn-activated bg-green text-white">
                        <div className="d-flex align-items-center justify-content-start">
                            <img src={check} /> <span>ACTIVATED</span>
                        </div>
                    </button>
                    <button className="btn btn-upload bg-orange text-white ms-3">
                        <div className="d-flex align-items-center justify-content-start">
                            <img src={arrowUp} /> <span>UPLOAD</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;