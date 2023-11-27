import React, {useState, useRef} from "react";
import logo from "../img/logo.png";
import arrowUp from "../img/arrow-up.png";
import check from "../img/check.png";

function Header() {
    const [source, setSource] = useState();
    const inputRef = useRef();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
        alert(file, url);
        console.log(file);
        console.log('URL: ', url);
    }
    const handleChoose = (event) => {
        inputRef.current.click();
      };
  return (
    <header className="header">
        <div className="container-fluid h-100">
            <div className="d-flex align-items-center justify-content-between h-100">
                <div className="logo">
                    <img src={logo} alt="Diverge Logo" />
                </div>
                <div className="btn-wrapper d-flex">
                    <button className="btn btn-activated bg-green text-white">
                        <div className="d-flex align-items-center justify-content-start">
                            <img src={check} /> <span>ACTIVATED</span>
                        </div>
                    </button>
                    <div className="position-relative ms-3">
                        <label htmlFor="file-upload" className="custom-file-upload bg-orange btn-upload text-white" onClick={handleChoose}>
                            <img src={arrowUp} style={{transform: 'translateY(3px)'}} /> <p className="mb-0" style={{display: 'inline-block', transform: 'translate(20px, 5px)'}}>UPLOAD</p>
                        </label>
                        <input id="file-upload" type="file" accept=".mp4,.mov" onChange={handleFileChange} ref={inputRef} />
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;