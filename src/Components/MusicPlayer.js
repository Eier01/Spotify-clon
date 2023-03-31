import React,{useState, useRef, useEffect} from "react";
import '../Styles/MusicPlayer.css';
import { FaRegHeart, FaHeart, FaStepBackward, FaBackward, FaPause, FaPlay, FaForward, FaShareAlt, FaStepForward } from 'react-icons/fa';
import {BsDownload} from 'react-icons/bs';

function MusicPlayer({song,imgSrc}) {
    

    const [isLove, setLoved] = useState(false)
    const [isPlaying, setPlaying] = useState(true)
    const [duration, setDuration] = useState(0)    
    const [currentTime, setCurrentTime] = useState(0)    

    //useRef() lo utilizamos para hacer referencia a un elemento
    const audioPlayer = useRef() //nuestro tage de audio
    const progressBar = useRef() //nuestra barra de progreso
    const animationRef = useRef() 

    useEffect(() =>{
        setLoved(false)
        setPlaying(true)
        setDuration(0)
        // setCurrentTime(0)
    },[song])

    useEffect(()=> {        
        const seconds = Math.floor(audioPlayer.current.duration) 
        setDuration(seconds)   
    },[audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

    const CalculateTime = (sec) =>{
        const minutes = Math.floor(sec / 60)
        const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`

        const seconds = Math.floor(sec % 60)
        const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`

        return `${returnMin}:${returnSec}`
    }

    const whilePlaying = () =>{
        progressBar.current.value =  audioPlayer.current.currentTime
        changeCurrentTime()
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    const changeloved = () =>{
        setLoved(!isLove)
    }

    const changeProgress = () =>{
        audioPlayer.current.currentTime = progressBar.current.value
        changeCurrentTime()
    }

    const changeCurrentTime = () =>{
        progressBar.current.style.setProperty('--player-played', `${(progressBar.current.value / (Math.floor(audioPlayer.current.duration))) *100}%`)
        setCurrentTime(progressBar.current.value)
    }

    const changePlayPause = () =>{
        setPlaying(!isPlaying)
        if(isPlaying){
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        }else{
            audioPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
    }

    return <div className="musicPlayer">
        <div className="songImage">
            <img src={imgSrc} alt=""/>
        </div>
        <div className="songAttributes">
            <audio src={song}preload ='metadata' ref={audioPlayer}/>
            <div className="top">
                <div className="left">
                    <div className="loved" onClick={changeloved}>
                        {isLove? (
                            <i>
                                <FaHeart/>
                            </i>
                        ) : (
                            <i>
                                <FaRegHeart/>                                
                            </i>
                        )
                    }
                    </div>

                    <div className="download"><i><BsDownload/></i></div>
                </div>
                <div className="middle">
                    <div className="back">
                        <i><FaStepBackward/></i>
                        <i><FaBackward/></i>
                    </div>
                    <div className="plpayPause" onClick={changePlayPause}>
                        {isPlaying ? <i><FaPlay/></i> : <i><FaPause/></i>}
                    </div>
                    <div className="forward">
                        <i><FaForward/></i>
                        <i><FaStepForward/></i>
                    </div>
                </div>
                <div className="right">
                    <i><FaShareAlt/></i>
                </div>
            </div>
            <div className="bottom">
                <div className="currentTime">{CalculateTime(currentTime)}</div>
                <input type="range" className="progresBar" ref={progressBar} onChange = {changeProgress} max = {duration}/>
                <div className="duration">
                    {(duration && !isNaN(duration) && CalculateTime(duration))?
                        CalculateTime(duration)
                        : 
                        '00:00'
                    }
                </div>
            </div>
        </div>
    </div>;
}

export {MusicPlayer};
