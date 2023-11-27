function AccordionInformation() {
    return (
        <div className="accordion my-2" id="infoAccordion">
            <div className="accordion-item">
                <h2 id="infoHeadingFirst" className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#infoCollapseFirst" aria-expanded="false" aria-controls="infoCollapseFirst">
                        Video Information
                    </button>
                </h2>
                <div id="infoCollapseFirst" className="accordion-collapse collapse" aria-labelledby="infoHeadingFirst" data-bs-parent="#infoAccordion">
                    <div className="accordion-body">
                        <div className="d-flex">
                            <div className="left-part">
                                <div>
                                    <p>Detect Language: </p>
                                    <p>Persian</p>
                                </div>
                                <div>
                                    <p>Number of Speakers: </p>
                                    <p>2</p>
                                </div>
                                <div>
                                    <p>Sentiment Analysis: </p>
                                    <p>Confusion <span style={{color: '#00ADD3',fontSize: '8px'}}>Show More</span></p>
                                </div>
                            </div>
                            <div className="right-part">
                                <div>
                                    <p>Title: </p>
                                    <p>US and China agree to resign.mp4</p>
                                </div>
                                <div>
                                    <p>Duration: </p>
                                    <p>1:40</p>
                                </div>
                                <div>
                                    <p>Date: </p>
                                    <p>13/11/2023</p>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordionInformation