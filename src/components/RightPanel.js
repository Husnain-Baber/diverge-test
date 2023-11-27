import Speaker from "./Speaker"

function RightPanel() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-between gap-2">
                <button className="btn tab-btn active">Original</button>
                <button className="btn tab-btn">English</button>
                <button className="btn tab-btn">Arabic</button>
            </div>
            <ul>
                <Speaker />
            </ul>
        </>
    )
}

export default RightPanel