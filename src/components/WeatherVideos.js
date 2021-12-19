import './WeatherVideos.css'
import Video from './Video.js'
import { Modal } from './Modal';
import { useState, useEffect } from 'react';
import el_nino_img from "../img/el_nino.jpg"
import cloud_formation_img from "../img/cloud_formation.jpg"
import pause_btn_img from "../icons/play.png"

const WeatherVideos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [video_alt_view, set_video_alt_view] = useState(false);
    const [video_src, set_video_src] = useState("");
    useEffect(( )=>{
        if(video_src === "") return;
        setIsModalOpen(true)
    }, [video_src])

    return (
        <>
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <Video src={video_src}/>
                </Modal>
            )}
            <div className="weather-videos">
                <div className="report-title">
                    <h2>Interesting Weather Videos</h2>
                </div>
                <div className="video-container-outer1">
                    { !video_alt_view ?
                        <>
                            <div className="video-container-outer2">
                                <div
                                    onClick={() => set_video_src("https://www.youtube.com/embed/7QUkyVsUz08")}
                                    className="video-container"
                                >
                                    <img
                                        src={cloud_formation_img}
                                        alt=""
                                        className="video-thumb-current"
                                    />
                                    <div>
                                        <span className="vid_text_title">Strange Clouds Formation</span>
                                        <p className="vid_text_by">By Relaxing Nature</p>
                                    </div>
                                    <div className="pause-div">
                                        <img src={pause_btn_img} alt="" className="pause" />
                                    </div>
                                </div>
                                <p className="current-track">Current</p>
                            </div>
                            <div className="video-container-outer2">
                                <img
                                    onClick={() => {
                                        set_video_alt_view(!video_alt_view)
                                        set_video_src("https://www.youtube.com/embed/wVlfyhs64IY")
                                    }}
                                    src={el_nino_img}
                                    alt=""
                                    className="video-thumb"
                                />
                                <p className="current-track">Next</p>
                            </div>
                       </>
                    :  <> 
                            <div className="video-container-outer2">
                                <img
                                    onClick={() => {
                                        set_video_alt_view(!video_alt_view)
                                        set_video_src("https://www.youtube.com/embed/7QUkyVsUz08")
                                    }}
                                    src={cloud_formation_img}
                                    alt=""
                                    className="video-thumb"
                                />
                                <p className="current-track">Previous</p>
                            </div>
                            <div className="video-container-outer2">
                                <div
                                    onClick={() => set_video_src("https://www.youtube.com/embed/wVlfyhs64IY")}
                                    className="video-container"
                                >
                                    <img src={el_nino_img} alt="" className="video-thumb-current" />
                                    <div>
                                        <span className="vid_text_title">El Nino and La Nino</span>
                                        <p className="vid_text_by">By usoceangov</p>
                                    </div>
                                    <div className="pause-div">
                                        <img src={pause_btn_img} alt="" className="pause" />
                                    </div>
                                </div>
                                <p className="current-track">Current</p>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default WeatherVideos;