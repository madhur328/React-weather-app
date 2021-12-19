import './Video.css'

const Video = (props) => {
    return (
        <iframe
            width="800"
            height="400"
            src={props.src}
            title="YouTube video player"
            frameborder="0"
            allow="encrypted-media;"
            allowfullscreen
        />
    );
}

export default Video;