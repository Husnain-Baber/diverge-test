import React, {useState} from "react"

function AccordionSetting() {
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
        console.log(value);
    }
    const handleDecrement = () => {
        setValue(value - 1);
        console.log(value);
    }

    return (
        <div className="accordion my-2" id="regularAccordionRobots">
            <div className="accordion-item">
                <h2 id="regularHeadingFirst" className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#regularCollapseFirst" aria-expanded="false" aria-controls="regularCollapseFirst" >
                        Advanced Settings
                    </button>
                </h2>
                <div id="regularCollapseFirst" className="accordion-collapse collapse" aria-labelledby="regularHeadingFirst" data-bs-parent="#regularAccordionRobots">
                    <div className="accordion-body">
                        <div className="">
                            <div className="mb-4">
                                <label>Source Language</label>
                                <select className="custom-select">
                                    <option>Auto</option>
                                </select>
                                <label className="ms-5">Number of Speaker</label>
                                <div className="input-group">
                                    <input type="button" value="—" className="button-minus" data-field="quantity" onClick={handleDecrement} />
                                    <input type="number" step="1" max="" value={value} name="quantity" className="quantity-field" readOnly />
                                    <input type="button" value="+" className="button-plus" data-field="quantity" onClick={handleIncrement} />
                                </div>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Sentiment Analysis
                                </label>
                            </div>
                            <div className="form-check ms-3">
                                <input className="form-check-input" type="checkbox" id="flexCheckSummary" />
                                <label className="form-check-label" htmlFor="flexCheckSummary">
                                    Video Summary
                                </label>
                            </div>
                            <button className={`btn bg-dark-gray btn-process text-white float-end`}>PROCESS</button>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordionSetting