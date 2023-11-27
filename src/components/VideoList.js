import React, {useState} from "react";
import dots from "../img/dots.png";
import rename from "../img/rename.png";
import trash from "../img/delete.png";
import download from "../img/download.png";
import arrowLeft from "../img/chevron-left.png";

function VideoList() {
    const [visible, setVisible] = useState(false);

    const data = [
        { id: 1, title: "US and China agree to re...", time: "04:20", img: "news1" },
        { id: 2, title: "US and China agree to re...", time: "03:02", img: "news2" },
        { id: 3, title: "US and China agree to re...", time: "07:03", img: "news3"},
        { id: 4, title: "US and China agree to re...", time: "02:04", img: "news4" },
        { id: 5, title: "US and China agree to re...", time: "05:05", img: "news5" },
    ];
    const showDropdown = () => {
        setVisible(true);
        console.log('dropdown');
    }
    return (
        <ul>
        {
            data.map((element) => (
            <li key={element.id}>
                <div className="d-flex align-items-center justify-content-between single-video">
                    <img src={require('../img/' + element.img + '.png')} alt="Video" />
                    <div className="text-left">
                        <p className="title">{element.title}</p>
                        <p className="time mb-0">{element.time}</p>
                    </div>
                    <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id={element.id} data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={dots} alt="Dropdown Button" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby={element.id}>
                        <li><a className="dropdown-item px-0" href="#"><img src={download} /> Export Result <img src={arrowLeft} className="float-end" style={{transform: 'translateY(2px)'}} /> </a></li>
                        <li><a className="dropdown-item px-0" href="#"><img src={trash} /> Move to trash <img src={arrowLeft} className="float-end" style={{transform: 'translateY(2px)'}} /> </a></li>
                        <li><a className="dropdown-item px-0" href="#"><img src={rename} /> Rename <img src={arrowLeft} className="float-end" style={{transform: 'translateY(2px)'}} /> </a></li>  
                    </ul>
                </div>
                    {/* <button className="btn"><img src={dots} alt="Dropdown Button" onClick={showDropdown}/></button> */}
                    
                </div>
                
                {/* {visible &&
                    <ul className="dropdown-menu">
                       
                    </ul>
                    } */}
            </li>
            ))
        }
        
        </ul>
    )
}

export default VideoList;