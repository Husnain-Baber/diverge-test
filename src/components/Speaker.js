

function Speaker() {
    const data = [
        { id: 1, name: "Speaker 1", time: "00:01", msg: "Good morning" },
        { id: 2, name: "Speaker 2", time: "00:02", msg: "Good morning, Albert Flores isn't it?" },
        { id: 3, name: "Speaker 1", time: "00:03", msg: "How was your day?" },
        { id: 4, name: "Speaker 2", time: "00:04", msg: "I am good, what about you?"},
        { id: 5, name: "Speaker 1", time: "00:05", msg: "I am not well, I have headache"},
        { id: 6, name: "Speaker 2", time: "00:06", msg: "Oh! you should take rest"},
    ];
    return (
        <>
        {
            data.map((element, index) => (
            <li key={element.id}>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="text-left">
                        <p className="speaker mb-0">{element.name}</p>
                        <div className="hr"></div>
                        <p className="time mb-0">{element.time}</p>
                        <p className="time mb-0">{element.msg}</p>
                    </div>
                </div>
            </li>
        ))}
        </>
    )
}

export default Speaker