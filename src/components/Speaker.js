

function Speaker() {
    return (
        <li>
            <div className="d-flex align-items-center justify-content-between">
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

export default Speaker