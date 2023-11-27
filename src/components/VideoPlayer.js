import videoSrc from "../video/video.mp4";

function VideoPlayer() {
    return (
        <div className="video-wrapper">
            <video src={videoSrc} controls type="video/mp4" className="w-100">
            </video>
        </div>
    )
}

export default VideoPlayer