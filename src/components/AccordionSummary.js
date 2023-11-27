function AccordionSummary() {
    return (
        <div className="accordion my-2" id="accordionSummary">
            <div className="accordion-item">
                <h2 id="summaryHeadingFirst" className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#summaryCollapseFirst" aria-expanded="false" aria-controls="summaryCollapseFirst">
                        Video Summary
                    </button>
                </h2>
                <div id="summaryCollapseFirst" className="accordion-collapse collapse" aria-labelledby="summaryHeadingFirst" data-bs-parent="#accordionSummary">
                    <div className="accordion-body">
                        <div>
                            <p style={{textAlign: 'justify'}}>In the era of digital proliferation, the volume of video content generated and consumed across various sectors has escalated exponentially. This surge has underscored the necessity for efficient, accurate, and scalable methods of content analysis. Traditional approaches, predominantly manu</p>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordionSummary