import React from "react";
import AccordionSetting from "./AccordionSetting";
import VideoPlayer from "./VideoPlayer";
import AccordionSummary from "./AccordionSummary";
import AccordionInformation from "./AccordionInformation";

function Content() {
    return (
        <>
            <AccordionSetting />
            <VideoPlayer />
            <AccordionSummary />
            <AccordionInformation />
        </>
    )
}

export default Content