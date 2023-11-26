import video1 from "../img/news1.png";
import dots from "../img/dots.png";

function VideoList() {
    return (
        <li>
            <div className="d-flex align-items-center justify-content-between single-video">
                <img src={video1} alt="Video" />
                <div className="text-left">
                    <p className="title">US and China agree to re...</p>
                    <p className="time mb-0">4:20</p>
                </div>
                <button className="btn"><img src={dots} alt="Dropdown Button"/></button>
            </div>
        </li>
    )
}

export default VideoList;